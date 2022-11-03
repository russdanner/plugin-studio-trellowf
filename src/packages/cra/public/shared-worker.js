!(function () {
  'use strict';
  var e = function (t, r) {
    return (
      (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        }),
      e(t, r)
    );
  };
  function t(t, r) {
    if ('function' != typeof r && null !== r)
      throw new TypeError('Class extends value ' + String(r) + ' is not a constructor or null');
    function n() {
      this.constructor = t;
    }
    e(t, r), (t.prototype = null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
  }
  var r = function () {
    return (
      (r =
        Object.assign ||
        function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }),
      r.apply(this, arguments)
    );
  };
  function n(e) {
    var t = 'function' == typeof Symbol && Symbol.iterator,
      r = t && e[t],
      n = 0;
    if (r) return r.call(e);
    if (e && 'number' == typeof e.length)
      return {
        next: function () {
          return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
        }
      };
    throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
  }
  function o(e, t) {
    var r = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!r) return e;
    var n,
      o,
      i = r.call(e),
      s = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; ) s.push(n.value);
    } catch (e) {
      o = { error: e };
    } finally {
      try {
        n && !n.done && (r = i.return) && r.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return s;
  }
  function i(e, t, r) {
    if (r || 2 === arguments.length)
      for (var n, o = 0, i = t.length; o < i; o++)
        (!n && o in t) || (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
    return e.concat(n || Array.prototype.slice.call(t));
  }
  function s(e) {
    return 'function' == typeof e;
  }
  function a(e) {
    return function (t) {
      if (
        (function (e) {
          return s(null == e ? void 0 : e.lift);
        })(t)
      )
        return t.lift(function (t) {
          try {
            return e(t, this);
          } catch (e) {
            this.error(e);
          }
        });
      throw new TypeError('Unable to lift unknown Observable type');
    };
  }
  function c(e) {
    var t = e(function (e) {
      Error.call(e), (e.stack = new Error().stack);
    });
    return (t.prototype = Object.create(Error.prototype)), (t.prototype.constructor = t), t;
  }
  var u = c(function (e) {
    return function (t) {
      e(this),
        (this.message = t
          ? t.length +
            ' errors occurred during unsubscription:\n' +
            t
              .map(function (e, t) {
                return t + 1 + ') ' + e.toString();
              })
              .join('\n  ')
          : ''),
        (this.name = 'UnsubscriptionError'),
        (this.errors = t);
    };
  });
  function l(e, t) {
    if (e) {
      var r = e.indexOf(t);
      0 <= r && e.splice(r, 1);
    }
  }
  var h = (function () {
    function e(e) {
      (this.initialTeardown = e), (this.closed = !1), (this._parentage = null), (this._finalizers = null);
    }
    var t;
    return (
      (e.prototype.unsubscribe = function () {
        var e, t, r, a, c;
        if (!this.closed) {
          this.closed = !0;
          var l = this._parentage;
          if (l)
            if (((this._parentage = null), Array.isArray(l)))
              try {
                for (var h = n(l), d = h.next(); !d.done; d = h.next()) {
                  d.value.remove(this);
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  d && !d.done && (t = h.return) && t.call(h);
                } finally {
                  if (e) throw e.error;
                }
              }
            else l.remove(this);
          var p = this.initialTeardown;
          if (s(p))
            try {
              p();
            } catch (e) {
              c = e instanceof u ? e.errors : [e];
            }
          var y = this._finalizers;
          if (y) {
            this._finalizers = null;
            try {
              for (var b = n(y), m = b.next(); !m.done; m = b.next()) {
                var v = m.value;
                try {
                  f(v);
                } catch (e) {
                  (c = null != c ? c : []), e instanceof u ? (c = i(i([], o(c)), o(e.errors))) : c.push(e);
                }
              }
            } catch (e) {
              r = { error: e };
            } finally {
              try {
                m && !m.done && (a = b.return) && a.call(b);
              } finally {
                if (r) throw r.error;
              }
            }
          }
          if (c) throw new u(c);
        }
      }),
      (e.prototype.add = function (t) {
        var r;
        if (t && t !== this)
          if (this.closed) f(t);
          else {
            if (t instanceof e) {
              if (t.closed || t._hasParent(this)) return;
              t._addParent(this);
            }
            (this._finalizers = null !== (r = this._finalizers) && void 0 !== r ? r : []).push(t);
          }
      }),
      (e.prototype._hasParent = function (e) {
        var t = this._parentage;
        return t === e || (Array.isArray(t) && t.includes(e));
      }),
      (e.prototype._addParent = function (e) {
        var t = this._parentage;
        this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
      }),
      (e.prototype._removeParent = function (e) {
        var t = this._parentage;
        t === e ? (this._parentage = null) : Array.isArray(t) && l(t, e);
      }),
      (e.prototype.remove = function (t) {
        var r = this._finalizers;
        r && l(r, t), t instanceof e && t._removeParent(this);
      }),
      (e.EMPTY = (((t = new e()).closed = !0), t)),
      e
    );
  })();
  function d(e) {
    return e instanceof h || (e && 'closed' in e && s(e.remove) && s(e.add) && s(e.unsubscribe));
  }
  function f(e) {
    s(e) ? e() : e.unsubscribe();
  }
  var p = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: void 0,
      useDeprecatedSynchronousErrorHandling: !1,
      useDeprecatedNextContext: !1
    },
    y = function (e, t) {
      for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
      return setTimeout.apply(void 0, i([e, t], o(r)));
    };
  function b() {}
  var m = (function (e) {
      function r(t) {
        var r = e.call(this) || this;
        return (r.isStopped = !1), t ? ((r.destination = t), d(t) && t.add(r)) : (r.destination = O), r;
      }
      return (
        t(r, e),
        (r.create = function (e, t, r) {
          return new w(e, t, r);
        }),
        (r.prototype.next = function (e) {
          this.isStopped || this._next(e);
        }),
        (r.prototype.error = function (e) {
          this.isStopped || ((this.isStopped = !0), this._error(e));
        }),
        (r.prototype.complete = function () {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }),
        (r.prototype.unsubscribe = function () {
          this.closed || ((this.isStopped = !0), e.prototype.unsubscribe.call(this), (this.destination = null));
        }),
        (r.prototype._next = function (e) {
          this.destination.next(e);
        }),
        (r.prototype._error = function (e) {
          try {
            this.destination.error(e);
          } finally {
            this.unsubscribe();
          }
        }),
        (r.prototype._complete = function () {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }),
        r
      );
    })(h),
    v = Function.prototype.bind;
  function g(e, t) {
    return v.call(e, t);
  }
  var _ = (function () {
      function e(e) {
        this.partialObserver = e;
      }
      return (
        (e.prototype.next = function (e) {
          var t = this.partialObserver;
          if (t.next)
            try {
              t.next(e);
            } catch (e) {
              S(e);
            }
        }),
        (e.prototype.error = function (e) {
          var t = this.partialObserver;
          if (t.error)
            try {
              t.error(e);
            } catch (e) {
              S(e);
            }
          else S(e);
        }),
        (e.prototype.complete = function () {
          var e = this.partialObserver;
          if (e.complete)
            try {
              e.complete();
            } catch (e) {
              S(e);
            }
        }),
        e
      );
    })(),
    w = (function (e) {
      function r(t, r, n) {
        var o,
          i,
          a = e.call(this) || this;
        s(t) || !t
          ? (o = { next: null != t ? t : void 0, error: null != r ? r : void 0, complete: null != n ? n : void 0 })
          : a && p.useDeprecatedNextContext
          ? (((i = Object.create(t)).unsubscribe = function () {
              return a.unsubscribe();
            }),
            (o = {
              next: t.next && g(t.next, i),
              error: t.error && g(t.error, i),
              complete: t.complete && g(t.complete, i)
            }))
          : (o = t);
        return (a.destination = new _(o)), a;
      }
      return t(r, e), r;
    })(m);
  function S(e) {
    var t;
    (t = e),
      y(function () {
        throw t;
      });
  }
  var O = {
    closed: !0,
    next: b,
    error: function (e) {
      throw e;
    },
    complete: b
  };
  var k = (function (e) {
    function r(t, r, n, o, i, s) {
      var a = e.call(this, t) || this;
      return (
        (a.onFinalize = i),
        (a.shouldUnsubscribe = s),
        (a._next = r
          ? function (e) {
              try {
                r(e);
              } catch (e) {
                t.error(e);
              }
            }
          : e.prototype._next),
        (a._error = o
          ? function (e) {
              try {
                o(e);
              } catch (e) {
                t.error(e);
              } finally {
                this.unsubscribe();
              }
            }
          : e.prototype._error),
        (a._complete = n
          ? function () {
              try {
                n();
              } catch (e) {
                t.error(e);
              } finally {
                this.unsubscribe();
              }
            }
          : e.prototype._complete),
        a
      );
    }
    return (
      t(r, e),
      (r.prototype.unsubscribe = function () {
        var t;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var r = this.closed;
          e.prototype.unsubscribe.call(this), !r && (null === (t = this.onFinalize) || void 0 === t || t.call(this));
        }
      }),
      r
    );
  })(m);
  function E(e, t) {
    return a(function (r, n) {
      var o,
        i,
        s,
        a = 0;
      r.subscribe(
        new k(
          n,
          function (r) {
            n.next(e.call(t, r, a++));
          },
          o,
          i,
          s
        )
      );
    });
  }
  var T = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
  function C(e) {
    return e;
  }
  function A(e) {
    return 0 === e.length
      ? C
      : 1 === e.length
      ? e[0]
      : function (t) {
          return e.reduce(function (e, t) {
            return t(e);
          }, t);
        };
  }
  var j = (function () {
    function e(e) {
      e && (this._subscribe = e);
    }
    return (
      (e.prototype.lift = function (t) {
        var r = new e();
        return (r.source = this), (r.operator = t), r;
      }),
      (e.prototype.subscribe = function (e, t, r) {
        var n,
          o = this,
          i =
            ((n = e) && n instanceof m) ||
            ((function (e) {
              return e && s(e.next) && s(e.error) && s(e.complete);
            })(n) &&
              d(n))
              ? e
              : new w(e, t, r);
        return (
          (function () {
            var e = o,
              t = e.operator,
              r = e.source;
            i.add(t ? t.call(i, r) : r ? o._subscribe(i) : o._trySubscribe(i));
          })(),
          i
        );
      }),
      (e.prototype._trySubscribe = function (e) {
        try {
          return this._subscribe(e);
        } catch (t) {
          e.error(t);
        }
      }),
      (e.prototype.forEach = function (e, t) {
        var r = this;
        return new (t = P(t))(function (t, n) {
          var o = new w({
            next: function (t) {
              try {
                e(t);
              } catch (e) {
                n(e), o.unsubscribe();
              }
            },
            error: n,
            complete: t
          });
          r.subscribe(o);
        });
      }),
      (e.prototype._subscribe = function (e) {
        var t;
        return null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(e);
      }),
      (e.prototype[T] = function () {
        return this;
      }),
      (e.prototype.pipe = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return A(e)(this);
      }),
      (e.prototype.toPromise = function (e) {
        var t = this;
        return new (e = P(e))(function (e, r) {
          var n;
          t.subscribe(
            function (e) {
              return (n = e);
            },
            function (e) {
              return r(e);
            },
            function () {
              return e(n);
            }
          );
        });
      }),
      (e.create = function (t) {
        return new e(t);
      }),
      e
    );
  })();
  function P(e) {
    var t;
    return null !== (t = null != e ? e : p.Promise) && void 0 !== t ? t : Promise;
  }
  function x(e) {
    switch (e.responseType) {
      case 'json':
        if ('response' in e) return e.response;
        var t = e;
        return JSON.parse(t.responseText);
      case 'document':
        return e.responseXML;
      default:
        return 'response' in e ? e.response : (t = e).responseText;
    }
  }
  var N = function (e, t, r, n) {
      void 0 === n && (n = 'download_load'),
        (this.originalEvent = e),
        (this.xhr = t),
        (this.request = r),
        (this.type = n);
      var o = t.status,
        i = t.responseType;
      (this.status = null != o ? o : 0), (this.responseType = null != i ? i : '');
      var s = t.getAllResponseHeaders();
      (this.responseHeaders = s
        ? s.split('\n').reduce(function (e, t) {
            var r = t.indexOf(': ');
            return (e[t.slice(0, r)] = t.slice(r + 2)), e;
          }, {})
        : {}),
        (this.response = x(t));
      var a = e.loaded,
        c = e.total;
      (this.loaded = a), (this.total = c);
    },
    H = c(function (e) {
      return function (e, t, r) {
        var n;
        (this.message = e),
          (this.name = 'AjaxError'),
          (this.xhr = t),
          (this.request = r),
          (this.status = t.status),
          (this.responseType = t.responseType);
        try {
          n = x(t);
        } catch (e) {
          n = t.responseText;
        }
        this.response = n;
      };
    }),
    I = (function () {
      function e(e, t) {
        return H.call(this, 'ajax timeout', e, t), (this.name = 'AjaxTimeoutError'), this;
      }
      return (e.prototype = Object.create(H.prototype)), e;
    })();
  function B(e, t) {
    return $({ method: 'GET', url: e, headers: t });
  }
  function F(e, t, r) {
    return $({ method: 'POST', url: e, body: t, headers: r });
  }
  function R(e, t) {
    return $({ method: 'DELETE', url: e, headers: t });
  }
  function D(e, t, r) {
    return $({ method: 'PUT', url: e, body: t, headers: r });
  }
  function U(e, t, r) {
    return $({ method: 'PATCH', url: e, body: t, headers: r });
  }
  var V = E(function (e) {
    return e.response;
  });
  function W(e, t) {
    return V($({ method: 'GET', url: e, headers: t }));
  }
  var L,
    $ =
      ((L = function (e) {
        var t;
        return (
          (t = 'string' == typeof e ? { url: e } : e),
          new j(function (e) {
            var n,
              o,
              i,
              s = r(
                { async: !0, crossDomain: !1, withCredentials: !1, method: 'GET', timeout: 0, responseType: 'json' },
                t
              ),
              a = s.queryParams,
              c = s.body,
              u = s.headers,
              l = s.url;
            if (!l) throw new TypeError('url is required');
            if (a)
              if (l.includes('?')) {
                var h = l.split('?');
                if (2 < h.length) throw new TypeError('invalid url');
                (i = new URLSearchParams(h[1])),
                  new URLSearchParams(a).forEach(function (e, t) {
                    return i.set(t, e);
                  }),
                  (l = h[0] + '?' + i);
              } else l = l + '?' + (i = new URLSearchParams(a));
            var d = {};
            if (u) for (var f in u) u.hasOwnProperty(f) && (d[f.toLowerCase()] = u[f]);
            var p = s.crossDomain;
            p || 'x-requested-with' in d || (d['x-requested-with'] = 'XMLHttpRequest');
            var y = s.withCredentials,
              b = s.xsrfCookieName,
              m = s.xsrfHeaderName;
            if ((y || !p) && b && m) {
              var v =
                null !==
                  (o =
                    null ===
                      (n =
                        null === document || void 0 === document
                          ? void 0
                          : document.cookie.match(new RegExp('(^|;\\s*)(' + b + ')=([^;]*)'))) || void 0 === n
                      ? void 0
                      : n.pop()) && void 0 !== o
                  ? o
                  : '';
              v && (d[m] = v);
            }
            var g,
              _ = (function (e, t) {
                var r;
                if (
                  !e ||
                  'string' == typeof e ||
                  (function (e) {
                    return 'undefined' != typeof FormData && e instanceof FormData;
                  })(e) ||
                  (function (e) {
                    return 'undefined' != typeof URLSearchParams && e instanceof URLSearchParams;
                  })(e) ||
                  (function (e) {
                    return J(e, 'ArrayBuffer');
                  })(e) ||
                  (function (e) {
                    return J(e, 'File');
                  })(e) ||
                  (function (e) {
                    return J(e, 'Blob');
                  })(e) ||
                  (function (e) {
                    return 'undefined' != typeof ReadableStream && e instanceof ReadableStream;
                  })(e)
                )
                  return e;
                if (
                  (function (e) {
                    return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView(e);
                  })(e)
                )
                  return e.buffer;
                if ('object' == typeof e)
                  return (
                    (t['content-type'] =
                      null !== (r = t['content-type']) && void 0 !== r ? r : 'application/json;charset=utf-8'),
                    JSON.stringify(e)
                  );
                throw new TypeError('Unknown body type');
              })(c, d),
              w = r(r({}, s), { url: l, headers: d, body: _ });
            g = t.createXHR ? t.createXHR() : new XMLHttpRequest();
            var S = t.progressSubscriber,
              O = t.includeDownloadProgress,
              k = void 0 !== O && O,
              E = t.includeUploadProgress,
              T = void 0 !== E && E,
              C = function (t, r) {
                g.addEventListener(t, function () {
                  var t,
                    n = r();
                  null === (t = null == S ? void 0 : S.error) || void 0 === t || t.call(S, n), e.error(n);
                });
              };
            C('timeout', function () {
              return new I(g, w);
            }),
              C('abort', function () {
                return new H('aborted', g, w);
              });
            var A = function (e, t) {
                return new N(t, g, w, e + '_' + t.type);
              },
              j = function (t, r, n) {
                t.addEventListener(r, function (t) {
                  e.next(A(n, t));
                });
              };
            T &&
              [G, K, q].forEach(function (e) {
                return j(g.upload, e, M);
              }),
              S &&
                [G, K].forEach(function (e) {
                  return g.upload.addEventListener(e, function (e) {
                    var t;
                    return null === (t = null == S ? void 0 : S.next) || void 0 === t ? void 0 : t.call(S, e);
                  });
                }),
              k &&
                [G, K].forEach(function (e) {
                  return j(g, e, z);
                });
            var P = function (t) {
              var r = 'ajax error' + (t ? ' ' + t : '');
              e.error(new H(r, g, w));
            };
            g.addEventListener('error', function (e) {
              var t;
              null === (t = null == S ? void 0 : S.error) || void 0 === t || t.call(S, e), P();
            }),
              g.addEventListener(q, function (t) {
                var r,
                  n,
                  o = g.status;
                if (o < 400) {
                  null === (r = null == S ? void 0 : S.complete) || void 0 === r || r.call(S);
                  var i = void 0;
                  try {
                    i = A(z, t);
                  } catch (t) {
                    return void e.error(t);
                  }
                  e.next(i), e.complete();
                } else null === (n = null == S ? void 0 : S.error) || void 0 === n || n.call(S, t), P(o);
              });
            var x = w.user,
              B = w.method,
              F = w.async;
            for (var f in (x ? g.open(B, l, F, x, w.password) : g.open(B, l, F),
            F && ((g.timeout = w.timeout), (g.responseType = w.responseType)),
            'withCredentials' in g && (g.withCredentials = w.withCredentials),
            d))
              d.hasOwnProperty(f) && g.setRequestHeader(f, d[f]);
            return (
              _ ? g.send(_) : g.send(),
              function () {
                g && 4 !== g.readyState && g.abort();
              }
            );
          })
        );
      }),
      (L.get = B),
      (L.post = F),
      (L.delete = R),
      (L.put = D),
      (L.patch = U),
      (L.getJSON = W),
      L),
    M = 'upload',
    z = 'download',
    G = 'loadstart',
    K = 'progress',
    q = 'load';
  var X = Object.prototype.toString;
  function J(e, t) {
    return X.call(e) === '[object ' + t + ']';
  }
  var Y = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`),
    Q = '%[a-f0-9]{2}',
    Z = new RegExp(Q, 'gi'),
    ee = new RegExp('(' + Q + ')+', 'gi');
  function te(e, t) {
    try {
      return decodeURIComponent(e.join(''));
    } catch (e) {}
    if (1 === e.length) return e;
    t = t || 1;
    var r = e.slice(0, t),
      n = e.slice(t);
    return Array.prototype.concat.call([], te(r), te(n));
  }
  function re(e) {
    try {
      return decodeURIComponent(e);
    } catch (n) {
      for (var t = e.match(Z), r = 1; r < t.length; r++) t = (e = te(t, r).join('')).match(Z);
      return e;
    }
  }
  var ne = function (e) {
      if ('string' != typeof e)
        throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof e + '`');
      try {
        return (e = e.replace(/\+/g, ' ')), decodeURIComponent(e);
      } catch (t) {
        return (function (e) {
          for (var t = { '%FE%FF': '��', '%FF%FE': '��' }, r = ee.exec(e); r; ) {
            try {
              t[r[0]] = decodeURIComponent(r[0]);
            } catch (e) {
              var n = re(r[0]);
              n !== r[0] && (t[r[0]] = n);
            }
            r = ee.exec(e);
          }
          t['%C2'] = '�';
          for (var o = Object.keys(t), i = 0; i < o.length; i++) {
            var s = o[i];
            e = e.replace(new RegExp(s, 'g'), t[s]);
          }
          return e;
        })(e);
      }
    },
    oe = (e, t) => {
      if ('string' != typeof e || 'string' != typeof t)
        throw new TypeError('Expected the arguments to be of type `string`');
      if ('' === t) return [e];
      const r = e.indexOf(t);
      return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)];
    },
    ie = function (e, t) {
      for (var r = {}, n = Object.keys(e), o = Array.isArray(t), i = 0; i < n.length; i++) {
        var s = n[i],
          a = e[s];
        (o ? -1 !== t.indexOf(s) : t(s, a, e)) && (r[s] = a);
      }
      return r;
    };
  function se(e) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
    throw Error(
      '[Immer] minified error nr: ' +
        e +
        (r.length
          ? ' ' +
            r
              .map(function (e) {
                return "'" + e + "'";
              })
              .join(',')
          : '') +
        '. Find the full error at: https://bit.ly/3cXEKWf'
    );
  }
  function ae(e) {
    return !!e && !!e[Ke];
  }
  function ce(e) {
    return (
      !!e &&
      ((function (e) {
        if (!e || 'object' != typeof e) return !1;
        var t = Object.getPrototypeOf(e);
        if (null === t) return !0;
        var r = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
        return r === Object || ('function' == typeof r && Function.toString.call(r) === qe);
      })(e) ||
        Array.isArray(e) ||
        !!e[Ge] ||
        !!e.constructor[Ge] ||
        pe(e) ||
        ye(e))
    );
  }
  function ue(e, t, r) {
    void 0 === r && (r = !1),
      0 === le(e)
        ? (r ? Object.keys : Xe)(e).forEach(function (n) {
            (r && 'symbol' == typeof n) || t(n, e[n], e);
          })
        : e.forEach(function (r, n) {
            return t(n, r, e);
          });
  }
  function le(e) {
    var t = e[Ke];
    return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : pe(e) ? 2 : ye(e) ? 3 : 0;
  }
  function he(e, t) {
    return 2 === le(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
  }
  function de(e, t, r) {
    var n = le(e);
    2 === n ? e.set(t, r) : 3 === n ? (e.delete(t), e.add(r)) : (e[t] = r);
  }
  function fe(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
  }
  function pe(e) {
    return Le && e instanceof Map;
  }
  function ye(e) {
    return $e && e instanceof Set;
  }
  function be(e) {
    return e.o || e.t;
  }
  function me(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = Je(e);
    delete t[Ke];
    for (var r = Xe(t), n = 0; n < r.length; n++) {
      var o = r[n],
        i = t[o];
      !1 === i.writable && ((i.writable = !0), (i.configurable = !0)),
        (i.get || i.set) && (t[o] = { configurable: !0, writable: !0, enumerable: i.enumerable, value: e[o] });
    }
    return Object.create(Object.getPrototypeOf(e), t);
  }
  function ve(e, t) {
    return (
      void 0 === t && (t = !1),
      _e(e) ||
        ae(e) ||
        !ce(e) ||
        (le(e) > 1 && (e.set = e.add = e.clear = e.delete = ge),
        Object.freeze(e),
        t &&
          ue(
            e,
            function (e, t) {
              return ve(t, !0);
            },
            !0
          )),
      e
    );
  }
  function ge() {
    se(2);
  }
  function _e(e) {
    return null == e || 'object' != typeof e || Object.isFrozen(e);
  }
  function we(e) {
    var t = Ye[e];
    return t || se(18, e), t;
  }
  function Se() {
    return Ve;
  }
  function Oe(e, t) {
    t && (we('Patches'), (e.u = []), (e.s = []), (e.v = t));
  }
  function ke(e) {
    Ee(e), e.p.forEach(Ce), (e.p = null);
  }
  function Ee(e) {
    e === Ve && (Ve = e.l);
  }
  function Te(e) {
    return (Ve = { p: [], l: Ve, h: e, m: !0, _: 0 });
  }
  function Ce(e) {
    var t = e[Ke];
    0 === t.i || 1 === t.i ? t.j() : (t.O = !0);
  }
  function Ae(e, t) {
    t._ = t.p.length;
    var r = t.p[0],
      n = void 0 !== e && e !== r;
    return (
      t.h.g || we('ES5').S(t, e, n),
      n
        ? (r[Ke].P && (ke(t), se(4)),
          ce(e) && ((e = je(t, e)), t.l || xe(t, e)),
          t.u && we('Patches').M(r[Ke], e, t.u, t.s))
        : (e = je(t, r, [])),
      ke(t),
      t.u && t.v(t.u, t.s),
      e !== ze ? e : void 0
    );
  }
  function je(e, t, r) {
    if (_e(t)) return t;
    var n = t[Ke];
    if (!n)
      return (
        ue(
          t,
          function (o, i) {
            return Pe(e, n, t, o, i, r);
          },
          !0
        ),
        t
      );
    if (n.A !== e) return t;
    if (!n.P) return xe(e, n.t, !0), n.t;
    if (!n.I) {
      (n.I = !0), n.A._--;
      var o = 4 === n.i || 5 === n.i ? (n.o = me(n.k)) : n.o;
      ue(3 === n.i ? new Set(o) : o, function (t, i) {
        return Pe(e, n, o, t, i, r);
      }),
        xe(e, o, !1),
        r && e.u && we('Patches').R(n, r, e.u, e.s);
    }
    return n.o;
  }
  function Pe(e, t, r, n, o, i) {
    if (ae(o)) {
      var s = je(e, o, i && t && 3 !== t.i && !he(t.D, n) ? i.concat(n) : void 0);
      if ((de(r, n, s), !ae(s))) return;
      e.m = !1;
    }
    if (ce(o) && !_e(o)) {
      if (!e.h.F && e._ < 1) return;
      je(e, o), (t && t.A.l) || xe(e, o);
    }
  }
  function xe(e, t, r) {
    void 0 === r && (r = !1), e.h.F && e.m && ve(t, r);
  }
  function Ne(e, t) {
    var r = e[Ke];
    return (r ? be(r) : e)[t];
  }
  function He(e, t) {
    if (t in e)
      for (var r = Object.getPrototypeOf(e); r; ) {
        var n = Object.getOwnPropertyDescriptor(r, t);
        if (n) return n;
        r = Object.getPrototypeOf(r);
      }
  }
  function Ie(e) {
    e.P || ((e.P = !0), e.l && Ie(e.l));
  }
  function Be(e) {
    e.o || (e.o = me(e.t));
  }
  function Fe(e, t, r) {
    var n = pe(t)
      ? we('MapSet').N(t, r)
      : ye(t)
      ? we('MapSet').T(t, r)
      : e.g
      ? (function (e, t) {
          var r = Array.isArray(e),
            n = { i: r ? 1 : 0, A: t ? t.A : Se(), P: !1, I: !1, D: {}, l: t, t: e, k: null, o: null, j: null, C: !1 },
            o = n,
            i = Qe;
          r && ((o = [n]), (i = Ze));
          var s = Proxy.revocable(o, i),
            a = s.revoke,
            c = s.proxy;
          return (n.k = c), (n.j = a), c;
        })(t, r)
      : we('ES5').J(t, r);
    return (r ? r.A : Se()).p.push(n), n;
  }
  function Re(e) {
    return (
      ae(e) || se(22, e),
      (function e(t) {
        if (!ce(t)) return t;
        var r,
          n = t[Ke],
          o = le(t);
        if (n) {
          if (!n.P && (n.i < 4 || !we('ES5').K(n))) return n.t;
          (n.I = !0), (r = De(t, o)), (n.I = !1);
        } else r = De(t, o);
        return (
          ue(r, function (t, o) {
            (n &&
              (function (e, t) {
                return 2 === le(e) ? e.get(t) : e[t];
              })(n.t, t) === o) ||
              de(r, t, e(o));
          }),
          3 === o ? new Set(r) : r
        );
      })(e)
    );
  }
  function De(e, t) {
    switch (t) {
      case 2:
        return new Map(e);
      case 3:
        return Array.from(e);
    }
    return me(e);
  }
  !(function (e) {
    const t = Y,
      r = ne,
      n = oe,
      o = ie;
    function i(e) {
      if ('string' != typeof e || 1 !== e.length)
        throw new TypeError('arrayFormatSeparator must be single character string');
    }
    function s(e, r) {
      return r.encode ? (r.strict ? t(e) : encodeURIComponent(e)) : e;
    }
    function a(e, t) {
      return t.decode ? r(e) : e;
    }
    function c(e) {
      return Array.isArray(e)
        ? e.sort()
        : 'object' == typeof e
        ? c(Object.keys(e))
            .sort((e, t) => Number(e) - Number(t))
            .map((t) => e[t])
        : e;
    }
    function u(e) {
      const t = e.indexOf('#');
      return -1 !== t && (e = e.slice(0, t)), e;
    }
    function l(e) {
      const t = (e = u(e)).indexOf('?');
      return -1 === t ? '' : e.slice(t + 1);
    }
    function h(e, t) {
      return (
        t.parseNumbers && !Number.isNaN(Number(e)) && 'string' == typeof e && '' !== e.trim()
          ? (e = Number(e))
          : !t.parseBooleans ||
            null === e ||
            ('true' !== e.toLowerCase() && 'false' !== e.toLowerCase()) ||
            (e = 'true' === e.toLowerCase()),
        e
      );
    }
    function d(e, t) {
      i(
        (t = Object.assign(
          { decode: !0, sort: !0, arrayFormat: 'none', arrayFormatSeparator: ',', parseNumbers: !1, parseBooleans: !1 },
          t
        )).arrayFormatSeparator
      );
      const r = (function (e) {
          let t;
          switch (e.arrayFormat) {
            case 'index':
              return (e, r, n) => {
                (t = /\[(\d*)\]$/.exec(e)),
                  (e = e.replace(/\[\d*\]$/, '')),
                  t ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r)) : (n[e] = r);
              };
            case 'bracket':
              return (e, r, n) => {
                (t = /(\[\])$/.exec(e)),
                  (e = e.replace(/\[\]$/, '')),
                  t ? (void 0 !== n[e] ? (n[e] = [].concat(n[e], r)) : (n[e] = [r])) : (n[e] = r);
              };
            case 'comma':
            case 'separator':
              return (t, r, n) => {
                const o = 'string' == typeof r && r.includes(e.arrayFormatSeparator),
                  i = 'string' == typeof r && !o && a(r, e).includes(e.arrayFormatSeparator);
                r = i ? a(r, e) : r;
                const s = o || i ? r.split(e.arrayFormatSeparator).map((t) => a(t, e)) : null === r ? r : a(r, e);
                n[t] = s;
              };
            default:
              return (e, t, r) => {
                void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
              };
          }
        })(t),
        o = Object.create(null);
      if ('string' != typeof e) return o;
      if (!(e = e.trim().replace(/^[?#&]/, ''))) return o;
      for (const i of e.split('&')) {
        if ('' === i) continue;
        let [e, s] = n(t.decode ? i.replace(/\+/g, ' ') : i, '=');
        (s = void 0 === s ? null : ['comma', 'separator'].includes(t.arrayFormat) ? s : a(s, t)), r(a(e, t), s, o);
      }
      for (const e of Object.keys(o)) {
        const r = o[e];
        if ('object' == typeof r && null !== r) for (const e of Object.keys(r)) r[e] = h(r[e], t);
        else o[e] = h(r, t);
      }
      return !1 === t.sort
        ? o
        : (!0 === t.sort ? Object.keys(o).sort() : Object.keys(o).sort(t.sort)).reduce((e, t) => {
            const r = o[t];
            return Boolean(r) && 'object' == typeof r && !Array.isArray(r) ? (e[t] = c(r)) : (e[t] = r), e;
          }, Object.create(null));
    }
    (e.extract = l),
      (e.parse = d),
      (e.stringify = (e, t) => {
        if (!e) return '';
        i(
          (t = Object.assign({ encode: !0, strict: !0, arrayFormat: 'none', arrayFormatSeparator: ',' }, t))
            .arrayFormatSeparator
        );
        const r = (r) => (t.skipNull && null == e[r]) || (t.skipEmptyString && '' === e[r]),
          n = (function (e) {
            switch (e.arrayFormat) {
              case 'index':
                return (t) => (r, n) => {
                  const o = r.length;
                  return void 0 === n || (e.skipNull && null === n) || (e.skipEmptyString && '' === n)
                    ? r
                    : null === n
                    ? [...r, [s(t, e), '[', o, ']'].join('')]
                    : [...r, [s(t, e), '[', s(o, e), ']=', s(n, e)].join('')];
                };
              case 'bracket':
                return (t) => (r, n) =>
                  void 0 === n || (e.skipNull && null === n) || (e.skipEmptyString && '' === n)
                    ? r
                    : null === n
                    ? [...r, [s(t, e), '[]'].join('')]
                    : [...r, [s(t, e), '[]=', s(n, e)].join('')];
              case 'comma':
              case 'separator':
                return (t) => (r, n) =>
                  null == n || 0 === n.length
                    ? r
                    : 0 === r.length
                    ? [[s(t, e), '=', s(n, e)].join('')]
                    : [[r, s(n, e)].join(e.arrayFormatSeparator)];
              default:
                return (t) => (r, n) =>
                  void 0 === n || (e.skipNull && null === n) || (e.skipEmptyString && '' === n)
                    ? r
                    : null === n
                    ? [...r, s(t, e)]
                    : [...r, [s(t, e), '=', s(n, e)].join('')];
            }
          })(t),
          o = {};
        for (const t of Object.keys(e)) r(t) || (o[t] = e[t]);
        const a = Object.keys(o);
        return (
          !1 !== t.sort && a.sort(t.sort),
          a
            .map((r) => {
              const o = e[r];
              return void 0 === o
                ? ''
                : null === o
                ? s(r, t)
                : Array.isArray(o)
                ? o.reduce(n(r), []).join('&')
                : s(r, t) + '=' + s(o, t);
            })
            .filter((e) => e.length > 0)
            .join('&')
        );
      }),
      (e.parseUrl = (e, t) => {
        t = Object.assign({ decode: !0 }, t);
        const [r, o] = n(e, '#');
        return Object.assign(
          { url: r.split('?')[0] || '', query: d(l(e), t) },
          t && t.parseFragmentIdentifier && o ? { fragmentIdentifier: a(o, t) } : {}
        );
      }),
      (e.stringifyUrl = (t, r) => {
        r = Object.assign({ encode: !0, strict: !0 }, r);
        const n = u(t.url).split('?')[0] || '',
          o = e.extract(t.url),
          i = e.parse(o, { sort: !1 }),
          a = Object.assign(i, t.query);
        let c = e.stringify(a, r);
        c && (c = `?${c}`);
        let l = (function (e) {
          let t = '';
          const r = e.indexOf('#');
          return -1 !== r && (t = e.slice(r)), t;
        })(t.url);
        return t.fragmentIdentifier && (l = `#${s(t.fragmentIdentifier, r)}`), `${n}${c}${l}`;
      }),
      (e.pick = (t, r, n) => {
        n = Object.assign({ parseFragmentIdentifier: !0 }, n);
        const { url: i, query: s, fragmentIdentifier: a } = e.parseUrl(t, n);
        return e.stringifyUrl({ url: i, query: o(s, r), fragmentIdentifier: a }, n);
      }),
      (e.exclude = (t, r, n) => {
        const o = Array.isArray(r) ? (e) => !r.includes(e) : (e, t) => !r(e, t);
        return e.pick(t, o, n);
      });
  })({});
  var Ue,
    Ve,
    We = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
    Le = 'undefined' != typeof Map,
    $e = 'undefined' != typeof Set,
    Me = 'undefined' != typeof Proxy && void 0 !== Proxy.revocable && 'undefined' != typeof Reflect,
    ze = We ? Symbol.for('immer-nothing') : (((Ue = {})['immer-nothing'] = !0), Ue),
    Ge = We ? Symbol.for('immer-draftable') : '__$immer_draftable',
    Ke = We ? Symbol.for('immer-state') : '__$immer_state',
    qe = '' + Object.prototype.constructor,
    Xe =
      'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : void 0 !== Object.getOwnPropertySymbols
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
          }
        : Object.getOwnPropertyNames,
    Je =
      Object.getOwnPropertyDescriptors ||
      function (e) {
        var t = {};
        return (
          Xe(e).forEach(function (r) {
            t[r] = Object.getOwnPropertyDescriptor(e, r);
          }),
          t
        );
      },
    Ye = {},
    Qe = {
      get: function (e, t) {
        if (t === Ke) return e;
        var r = be(e);
        if (!he(r, t))
          return (function (e, t, r) {
            var n,
              o = He(t, r);
            return o ? ('value' in o ? o.value : null === (n = o.get) || void 0 === n ? void 0 : n.call(e.k)) : void 0;
          })(e, r, t);
        var n = r[t];
        return e.I || !ce(n) ? n : n === Ne(e.t, t) ? (Be(e), (e.o[t] = Fe(e.A.h, n, e))) : n;
      },
      has: function (e, t) {
        return t in be(e);
      },
      ownKeys: function (e) {
        return Reflect.ownKeys(be(e));
      },
      set: function (e, t, r) {
        var n = He(be(e), t);
        if (null == n ? void 0 : n.set) return n.set.call(e.k, r), !0;
        if (!e.P) {
          var o = Ne(be(e), t),
            i = null == o ? void 0 : o[Ke];
          if (i && i.t === r) return (e.o[t] = r), (e.D[t] = !1), !0;
          if (fe(r, o) && (void 0 !== r || he(e.t, t))) return !0;
          Be(e), Ie(e);
        }
        return (
          (e.o[t] === r && 'number' != typeof r && (void 0 !== r || t in e.o)) || ((e.o[t] = r), (e.D[t] = !0), !0)
        );
      },
      deleteProperty: function (e, t) {
        return (
          void 0 !== Ne(e.t, t) || t in e.t ? ((e.D[t] = !1), Be(e), Ie(e)) : delete e.D[t], e.o && delete e.o[t], !0
        );
      },
      getOwnPropertyDescriptor: function (e, t) {
        var r = be(e),
          n = Reflect.getOwnPropertyDescriptor(r, t);
        return n
          ? { writable: !0, configurable: 1 !== e.i || 'length' !== t, enumerable: n.enumerable, value: r[t] }
          : n;
      },
      defineProperty: function () {
        se(11);
      },
      getPrototypeOf: function (e) {
        return Object.getPrototypeOf(e.t);
      },
      setPrototypeOf: function () {
        se(12);
      }
    },
    Ze = {};
  ue(Qe, function (e, t) {
    Ze[e] = function () {
      return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
  }),
    (Ze.deleteProperty = function (e, t) {
      return Qe.deleteProperty.call(this, e[0], t);
    }),
    (Ze.set = function (e, t, r) {
      return Qe.set.call(this, e[0], t, r, e[0]);
    });
  var et = (function () {
      function e(e) {
        var t = this;
        (this.g = Me),
          (this.F = !0),
          (this.produce = function (e, r, n) {
            if ('function' == typeof e && 'function' != typeof r) {
              var o = r;
              r = e;
              var i = t;
              return function (e) {
                var t = this;
                void 0 === e && (e = o);
                for (var n = arguments.length, s = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) s[a - 1] = arguments[a];
                return i.produce(e, function (e) {
                  var n;
                  return (n = r).call.apply(n, [t, e].concat(s));
                });
              };
            }
            var s;
            if (('function' != typeof r && se(6), void 0 !== n && 'function' != typeof n && se(7), ce(e))) {
              var a = Te(t),
                c = Fe(t, e, void 0),
                u = !0;
              try {
                (s = r(c)), (u = !1);
              } finally {
                u ? ke(a) : Ee(a);
              }
              return 'undefined' != typeof Promise && s instanceof Promise
                ? s.then(
                    function (e) {
                      return Oe(a, n), Ae(e, a);
                    },
                    function (e) {
                      throw (ke(a), e);
                    }
                  )
                : (Oe(a, n), Ae(s, a));
            }
            if (!e || 'object' != typeof e) {
              if ((s = r(e)) === ze) return;
              return void 0 === s && (s = e), t.F && ve(s, !0), s;
            }
            se(21, e);
          }),
          (this.produceWithPatches = function (e, r) {
            return 'function' == typeof e
              ? function (r) {
                  for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                    o[i - 1] = arguments[i];
                  return t.produceWithPatches(r, function (t) {
                    return e.apply(void 0, [t].concat(o));
                  });
                }
              : [
                  t.produce(e, r, function (e, t) {
                    (n = e), (o = t);
                  }),
                  n,
                  o
                ];
            var n, o;
          }),
          'boolean' == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
          'boolean' == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze);
      }
      var t = e.prototype;
      return (
        (t.createDraft = function (e) {
          ce(e) || se(8), ae(e) && (e = Re(e));
          var t = Te(this),
            r = Fe(this, e, void 0);
          return (r[Ke].C = !0), Ee(t), r;
        }),
        (t.finishDraft = function (e, t) {
          var r = (e && e[Ke]).A;
          return Oe(r, t), Ae(void 0, r);
        }),
        (t.setAutoFreeze = function (e) {
          this.F = e;
        }),
        (t.setUseProxies = function (e) {
          e && !Me && se(20), (this.g = e);
        }),
        (t.applyPatches = function (e, t) {
          var r;
          for (r = t.length - 1; r >= 0; r--) {
            var n = t[r];
            if (0 === n.path.length && 'replace' === n.op) {
              e = n.value;
              break;
            }
          }
          r > -1 && (t = t.slice(r + 1));
          var o = we('Patches').$;
          return ae(e)
            ? o(e, t)
            : this.produce(e, function (e) {
                return o(e, t);
              });
        }),
        e
      );
    })(),
    tt = new et();
  tt.produce,
    tt.produceWithPatches.bind(tt),
    tt.setAutoFreeze.bind(tt),
    tt.setUseProxies.bind(tt),
    tt.applyPatches.bind(tt),
    tt.createDraft.bind(tt),
    tt.finishDraft.bind(tt);
  var rt =
    (this && this.__extends) ||
    (function () {
      var e = function (t, r) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }),
          e(t, r)
        );
      };
      return function (t, r) {
        if ('function' != typeof r && null !== r)
          throw new TypeError('Class extends value ' + String(r) + ' is not a constructor or null');
        function n() {
          this.constructor = t;
        }
        e(t, r), (t.prototype = null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
      };
    })();
  this && this.__generator;
  var nt =
      (this && this.__spreadArray) ||
      function (e, t) {
        for (var r = 0, n = t.length, o = e.length; r < n; r++, o++) e[o] = t[r];
        return e;
      },
    ot = Object.defineProperty,
    it = Object.getOwnPropertySymbols,
    st = Object.prototype.hasOwnProperty,
    at = Object.prototype.propertyIsEnumerable,
    ct = function (e, t, r) {
      return t in e ? ot(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r);
    },
    ut = function (e, t) {
      for (var r in t || (t = {})) st.call(t, r) && ct(e, r, t[r]);
      if (it)
        for (var n = 0, o = it(t); n < o.length; n++) {
          r = o[n];
          at.call(t, r) && ct(e, r, t[r]);
        }
      return e;
    };
  function lt(e, t) {
    function r() {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
      if (t) {
        var o = t.apply(void 0, r);
        if (!o) throw new Error('prepareAction did not return an object');
        return ut(
          ut({ type: e, payload: o.payload }, 'meta' in o && { meta: o.meta }),
          'error' in o && { error: o.error }
        );
      }
      return { type: e, payload: r[0] };
    }
    return (
      (r.toString = function () {
        return '' + e;
      }),
      (r.type = e),
      (r.match = function (t) {
        return t.type === e;
      }),
      r
    );
  }
  !(function (e) {
    function t() {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
      var o = e.apply(this, r) || this;
      return Object.setPrototypeOf(o, t.prototype), o;
    }
    rt(t, e),
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0
      }),
      (t.prototype.concat = function () {
        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return e.prototype.concat.apply(this, t);
      }),
      (t.prototype.prepend = function () {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        return 1 === e.length && Array.isArray(e[0])
          ? new (t.bind.apply(t, nt([void 0], e[0].concat(this))))()
          : new (t.bind.apply(t, nt([void 0], e.concat(this))))();
      });
  })(Array);
  var ht = 'listenerMiddleware';
  lt(ht + '/add'),
    lt(ht + '/removeAll'),
    lt(ht + '/remove'),
    (function () {
      function e(e, t) {
        var r = o[e];
        return (
          r
            ? (r.enumerable = t)
            : (o[e] = r =
                {
                  configurable: !0,
                  enumerable: t,
                  get: function () {
                    var t = this[Ke];
                    return Qe.get(t, e);
                  },
                  set: function (t) {
                    var r = this[Ke];
                    Qe.set(r, e, t);
                  }
                }),
          r
        );
      }
      function t(e) {
        for (var t = e.length - 1; t >= 0; t--) {
          var o = e[t][Ke];
          if (!o.P)
            switch (o.i) {
              case 5:
                n(o) && Ie(o);
                break;
              case 4:
                r(o) && Ie(o);
            }
        }
      }
      function r(e) {
        for (var t = e.t, r = e.k, n = Xe(r), o = n.length - 1; o >= 0; o--) {
          var i = n[o];
          if (i !== Ke) {
            var s = t[i];
            if (void 0 === s && !he(t, i)) return !0;
            var a = r[i],
              c = a && a[Ke];
            if (c ? c.t !== s : !fe(a, s)) return !0;
          }
        }
        var u = !!t[Ke];
        return n.length !== Xe(t).length + (u ? 0 : 1);
      }
      function n(e) {
        var t = e.k;
        if (t.length !== e.t.length) return !0;
        var r = Object.getOwnPropertyDescriptor(t, t.length - 1);
        return !(!r || r.get);
      }
      var o = {};
      !(function (e, t) {
        Ye[e] || (Ye[e] = t);
      })('ES5', {
        J: function (t, r) {
          var n = Array.isArray(t),
            o = (function (t, r) {
              if (t) {
                for (var n = Array(r.length), o = 0; o < r.length; o++) Object.defineProperty(n, '' + o, e(o, !0));
                return n;
              }
              var i = Je(r);
              delete i[Ke];
              for (var s = Xe(i), a = 0; a < s.length; a++) {
                var c = s[a];
                i[c] = e(c, t || !!i[c].enumerable);
              }
              return Object.create(Object.getPrototypeOf(r), i);
            })(n, t),
            i = { i: n ? 5 : 4, A: r ? r.A : Se(), P: !1, I: !1, D: {}, l: r, t: t, k: o, o: null, O: !1, C: !1 };
          return Object.defineProperty(o, Ke, { value: i, writable: !0 }), o;
        },
        S: function (e, r, o) {
          o
            ? ae(r) && r[Ke].A === e && t(e.p)
            : (e.u &&
                (function e(t) {
                  if (t && 'object' == typeof t) {
                    var r = t[Ke];
                    if (r) {
                      var o = r.t,
                        i = r.k,
                        s = r.D,
                        a = r.i;
                      if (4 === a)
                        ue(i, function (t) {
                          t !== Ke && (void 0 !== o[t] || he(o, t) ? s[t] || e(i[t]) : ((s[t] = !0), Ie(r)));
                        }),
                          ue(o, function (e) {
                            void 0 !== i[e] || he(i, e) || ((s[e] = !1), Ie(r));
                          });
                      else if (5 === a) {
                        if ((n(r) && (Ie(r), (s.length = !0)), i.length < o.length))
                          for (var c = i.length; c < o.length; c++) s[c] = !1;
                        else for (var u = o.length; u < i.length; u++) s[u] = !0;
                        for (var l = Math.min(i.length, o.length), h = 0; h < l; h++) void 0 === s[h] && e(i[h]);
                      }
                    }
                  }
                })(e.p[0]),
              t(e.p));
        },
        K: function (e) {
          return 4 === e.i ? r(e) : n(e);
        }
      });
    })();
  var dt = {},
    ft = Symbol('OmitGlobalHeaders');
  function pt(e, t) {
    return $.get(
      e,
      (function (e) {
        if ((void 0 === e && (e = {}), e && e !== ft))
          return Object.values(e).includes(ft) ? e : Object.assign({}, dt, e);
      })(t)
    );
  }
  function yt() {
    return pt('/studio/refresh.json').pipe(
      (function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = e.length;
        if (0 === r) throw new Error('list of properties cannot be empty.');
        return E(function (t) {
          for (var n = t, o = 0; o < r; o++) {
            var i = null == n ? void 0 : n[e[o]];
            if (void 0 === i) return;
            n = i;
          }
          return n;
        });
      })('response'),
      E(function (e) {
        return { token: e.token, expiresAt: new Date(e.expiresAt).getTime() };
      })
    );
  }
  var bt = lt('LOGOUT'),
    mt = lt('REFRESH_AUTH_TOKEN'),
    vt = lt('SHARED_WORKER_TOKEN'),
    gt = lt('SHARED_WORKER_UNAUTHENTICATED'),
    _t = lt('SHARED_WORKER_ERROR'),
    wt = lt('CONNECT'),
    St = lt('DISCONNECT'),
    Ot = lt('TIMEOUT');
  const kt = '\n',
    Et = '\0';
  class Tt {
    constructor(e) {
      const { command: t, headers: r, body: n, binaryBody: o, escapeHeaderValues: i, skipContentLengthHeader: s } = e;
      (this.command = t),
        (this.headers = Object.assign({}, r || {})),
        o ? ((this._binaryBody = o), (this.isBinaryBody = !0)) : ((this._body = n || ''), (this.isBinaryBody = !1)),
        (this.escapeHeaderValues = i || !1),
        (this.skipContentLengthHeader = s || !1);
    }
    get body() {
      return !this._body && this.isBinaryBody && (this._body = new TextDecoder().decode(this._binaryBody)), this._body;
    }
    get binaryBody() {
      return (
        this._binaryBody || this.isBinaryBody || (this._binaryBody = new TextEncoder().encode(this._body)),
        this._binaryBody
      );
    }
    static fromRawFrame(e, t) {
      const r = {},
        n = (e) => e.replace(/^\s+|\s+$/g, '');
      for (const o of e.headers.reverse()) {
        o.indexOf(':');
        const i = n(o[0]);
        let s = n(o[1]);
        t && 'CONNECT' !== e.command && 'CONNECTED' !== e.command && (s = Tt.hdrValueUnEscape(s)), (r[i] = s);
      }
      return new Tt({ command: e.command, headers: r, binaryBody: e.binaryBody, escapeHeaderValues: t });
    }
    toString() {
      return this.serializeCmdAndHeaders();
    }
    serialize() {
      const e = this.serializeCmdAndHeaders();
      return this.isBinaryBody ? Tt.toUnit8Array(e, this._binaryBody).buffer : e + this._body + Et;
    }
    serializeCmdAndHeaders() {
      const e = [this.command];
      this.skipContentLengthHeader && delete this.headers['content-length'];
      for (const t of Object.keys(this.headers || {})) {
        const r = this.headers[t];
        this.escapeHeaderValues && 'CONNECT' !== this.command && 'CONNECTED' !== this.command
          ? e.push(`${t}:${Tt.hdrValueEscape(`${r}`)}`)
          : e.push(`${t}:${r}`);
      }
      return (
        (this.isBinaryBody || (!this.isBodyEmpty() && !this.skipContentLengthHeader)) &&
          e.push(`content-length:${this.bodyLength()}`),
        e.join(kt) + kt + kt
      );
    }
    isBodyEmpty() {
      return 0 === this.bodyLength();
    }
    bodyLength() {
      const e = this.binaryBody;
      return e ? e.length : 0;
    }
    static sizeOfUTF8(e) {
      return e ? new TextEncoder().encode(e).length : 0;
    }
    static toUnit8Array(e, t) {
      const r = new TextEncoder().encode(e),
        n = new Uint8Array([0]),
        o = new Uint8Array(r.length + t.length + n.length);
      return o.set(r), o.set(t, r.length), o.set(n, r.length + t.length), o;
    }
    static marshall(e) {
      return new Tt(e).serialize();
    }
    static hdrValueEscape(e) {
      return e.replace(/\\/g, '\\\\').replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/:/g, '\\c');
    }
    static hdrValueUnEscape(e) {
      return e.replace(/\\r/g, '\r').replace(/\\n/g, '\n').replace(/\\c/g, ':').replace(/\\\\/g, '\\');
    }
  }
  class Ct {
    constructor(e, t) {
      (this.onFrame = e),
        (this.onIncomingPing = t),
        (this._encoder = new TextEncoder()),
        (this._decoder = new TextDecoder()),
        (this._token = []),
        this._initState();
    }
    parseChunk(e, t = !1) {
      let r;
      if (((r = e instanceof ArrayBuffer ? new Uint8Array(e) : this._encoder.encode(e)), t && 0 !== r[r.length - 1])) {
        const e = new Uint8Array(r.length + 1);
        e.set(r, 0), (e[r.length] = 0), (r = e);
      }
      for (let e = 0; e < r.length; e++) {
        const t = r[e];
        this._onByte(t);
      }
    }
    _collectFrame(e) {
      0 !== e &&
        13 !== e &&
        (10 !== e ? ((this._onByte = this._collectCommand), this._reinjectByte(e)) : this.onIncomingPing());
    }
    _collectCommand(e) {
      if (13 !== e)
        return 10 === e
          ? ((this._results.command = this._consumeTokenAsUTF8()), void (this._onByte = this._collectHeaders))
          : void this._consumeByte(e);
    }
    _collectHeaders(e) {
      13 !== e &&
        (10 !== e ? ((this._onByte = this._collectHeaderKey), this._reinjectByte(e)) : this._setupCollectBody());
    }
    _reinjectByte(e) {
      this._onByte(e);
    }
    _collectHeaderKey(e) {
      if (58 === e)
        return (this._headerKey = this._consumeTokenAsUTF8()), void (this._onByte = this._collectHeaderValue);
      this._consumeByte(e);
    }
    _collectHeaderValue(e) {
      if (13 !== e)
        return 10 === e
          ? (this._results.headers.push([this._headerKey, this._consumeTokenAsUTF8()]),
            (this._headerKey = void 0),
            void (this._onByte = this._collectHeaders))
          : void this._consumeByte(e);
    }
    _setupCollectBody() {
      const e = this._results.headers.filter((e) => 'content-length' === e[0])[0];
      e
        ? ((this._bodyBytesRemaining = parseInt(e[1], 10)), (this._onByte = this._collectBodyFixedSize))
        : (this._onByte = this._collectBodyNullTerminated);
    }
    _collectBodyNullTerminated(e) {
      0 !== e ? this._consumeByte(e) : this._retrievedBody();
    }
    _collectBodyFixedSize(e) {
      0 != this._bodyBytesRemaining-- ? this._consumeByte(e) : this._retrievedBody();
    }
    _retrievedBody() {
      (this._results.binaryBody = this._consumeTokenAsRaw()), this.onFrame(this._results), this._initState();
    }
    _consumeByte(e) {
      this._token.push(e);
    }
    _consumeTokenAsUTF8() {
      return this._decoder.decode(this._consumeTokenAsRaw());
    }
    _consumeTokenAsRaw() {
      const e = new Uint8Array(this._token);
      return (this._token = []), e;
    }
    _initState() {
      (this._results = { command: void 0, headers: [], binaryBody: void 0 }),
        (this._token = []),
        (this._headerKey = void 0),
        (this._onByte = this._collectFrame);
    }
  }
  var At, jt;
  !(function (e) {
    (e[(e.CONNECTING = 0)] = 'CONNECTING'),
      (e[(e.OPEN = 1)] = 'OPEN'),
      (e[(e.CLOSING = 2)] = 'CLOSING'),
      (e[(e.CLOSED = 3)] = 'CLOSED');
  })(At || (At = {})),
    (function (e) {
      (e[(e.ACTIVE = 0)] = 'ACTIVE'), (e[(e.DEACTIVATING = 1)] = 'DEACTIVATING'), (e[(e.INACTIVE = 2)] = 'INACTIVE');
    })(jt || (jt = {}));
  class Pt {
    constructor(e) {
      this.versions = e;
    }
    supportedVersions() {
      return this.versions.join(',');
    }
    protocolVersions() {
      return this.versions.map((e) => `v${e.replace('.', '')}.stomp`);
    }
  }
  (Pt.V1_0 = '1.0'), (Pt.V1_1 = '1.1'), (Pt.V1_2 = '1.2'), (Pt.default = new Pt([Pt.V1_0, Pt.V1_1, Pt.V1_2]));
  class xt {
    constructor(e, t, r = {}) {
      (this._client = e),
        (this._webSocket = t),
        (this._serverFrameHandlers = {
          CONNECTED: (e) => {
            this.debug(`connected to server ${e.headers.server}`),
              (this._connected = !0),
              (this._connectedVersion = e.headers.version),
              this._connectedVersion === Pt.V1_2 && (this._escapeHeaderValues = !0),
              this._setupHeartbeat(e.headers),
              this.onConnect(e);
          },
          MESSAGE: (e) => {
            const t = e.headers.subscription,
              r = this._subscriptions[t] || this.onUnhandledMessage,
              n = e,
              o = this,
              i = this._connectedVersion === Pt.V1_2 ? n.headers.ack : n.headers['message-id'];
            (n.ack = (e = {}) => o.ack(i, t, e)), (n.nack = (e = {}) => o.nack(i, t, e)), r(n);
          },
          RECEIPT: (e) => {
            const t = this._receiptWatchers[e.headers['receipt-id']];
            t ? (t(e), delete this._receiptWatchers[e.headers['receipt-id']]) : this.onUnhandledReceipt(e);
          },
          ERROR: (e) => {
            this.onStompError(e);
          }
        }),
        (this._counter = 0),
        (this._subscriptions = {}),
        (this._receiptWatchers = {}),
        (this._partialData = ''),
        (this._escapeHeaderValues = !1),
        (this._lastServerActivityTS = Date.now()),
        this.configure(r);
    }
    get connectedVersion() {
      return this._connectedVersion;
    }
    get connected() {
      return this._connected;
    }
    configure(e) {
      Object.assign(this, e);
    }
    start() {
      const e = new Ct(
        (e) => {
          const t = Tt.fromRawFrame(e, this._escapeHeaderValues);
          this.logRawCommunication || this.debug(`<<< ${t}`);
          (this._serverFrameHandlers[t.command] || this.onUnhandledFrame)(t);
        },
        () => {
          this.debug('<<< PONG');
        }
      );
      (this._webSocket.onmessage = (t) => {
        if ((this.debug('Received data'), (this._lastServerActivityTS = Date.now()), this.logRawCommunication)) {
          const e = t.data instanceof ArrayBuffer ? new TextDecoder().decode(t.data) : t.data;
          this.debug(`<<< ${e}`);
        }
        e.parseChunk(t.data, this.appendMissingNULLonIncoming);
      }),
        (this._onclose = (e) => {
          this.debug(`Connection closed to ${this._client.brokerURL}`), this._cleanUp(), this.onWebSocketClose(e);
        }),
        (this._webSocket.onclose = this._onclose),
        (this._webSocket.onerror = (e) => {
          this.onWebSocketError(e);
        }),
        (this._webSocket.onopen = () => {
          const e = Object.assign({}, this.connectHeaders);
          this.debug('Web Socket Opened...'),
            (e['accept-version'] = this.stompVersions.supportedVersions()),
            (e['heart-beat'] = [this.heartbeatOutgoing, this.heartbeatIncoming].join(',')),
            this._transmit({ command: 'CONNECT', headers: e });
        });
    }
    _setupHeartbeat(e) {
      if (e.version !== Pt.V1_1 && e.version !== Pt.V1_2) return;
      if (!e['heart-beat']) return;
      const [t, r] = e['heart-beat'].split(',').map((e) => parseInt(e, 10));
      if (0 !== this.heartbeatOutgoing && 0 !== r) {
        const e = Math.max(this.heartbeatOutgoing, r);
        this.debug(`send PING every ${e}ms`),
          (this._pinger = setInterval(() => {
            this._webSocket.readyState === At.OPEN && (this._webSocket.send(kt), this.debug('>>> PING'));
          }, e));
      }
      if (0 !== this.heartbeatIncoming && 0 !== t) {
        const e = Math.max(this.heartbeatIncoming, t);
        this.debug(`check PONG every ${e}ms`),
          (this._ponger = setInterval(() => {
            const t = Date.now() - this._lastServerActivityTS;
            t > 2 * e &&
              (this.debug(`did not receive server activity for the last ${t}ms`), this._closeOrDiscardWebsocket());
          }, e));
      }
    }
    _closeOrDiscardWebsocket() {
      this.discardWebsocketOnCommFailure
        ? (this.debug('Discarding websocket, the underlying socket may linger for a while'), this._discardWebsocket())
        : (this.debug('Issuing close on the websocket'), this._closeWebsocket());
    }
    forceDisconnect() {
      this._webSocket &&
        ((this._webSocket.readyState !== At.CONNECTING && this._webSocket.readyState !== At.OPEN) ||
          this._closeOrDiscardWebsocket());
    }
    _closeWebsocket() {
      (this._webSocket.onmessage = () => {}), this._webSocket.close();
    }
    _discardWebsocket() {
      var e, t;
      this._webSocket.terminate ||
        ((e = this._webSocket),
        (t = (e) => this.debug(e)),
        (e.terminate = function () {
          const e = () => {};
          (this.onerror = e), (this.onmessage = e), (this.onopen = e);
          const r = new Date(),
            n = this.onclose;
          (this.onclose = (e) => {
            const n = new Date().getTime() - r.getTime();
            t(`Discarded socket closed after ${n}ms, with code/reason: ${e.code}/${e.reason}`);
          }),
            this.close(),
            n.call(this, { code: 4001, reason: 'Heartbeat failure, discarding the socket', wasClean: !1 });
        })),
        this._webSocket.terminate();
    }
    _transmit(e) {
      const { command: t, headers: r, body: n, binaryBody: o, skipContentLengthHeader: i } = e,
        s = new Tt({
          command: t,
          headers: r,
          body: n,
          binaryBody: o,
          escapeHeaderValues: this._escapeHeaderValues,
          skipContentLengthHeader: i
        });
      let a = s.serialize();
      if (
        (this.logRawCommunication ? this.debug(`>>> ${a}`) : this.debug(`>>> ${s}`),
        this.forceBinaryWSFrames && 'string' == typeof a && (a = new TextEncoder().encode(a)),
        'string' == typeof a && this.splitLargeFrames)
      ) {
        let e = a;
        for (; e.length > 0; ) {
          const t = e.substring(0, this.maxWebSocketChunkSize);
          (e = e.substring(this.maxWebSocketChunkSize)),
            this._webSocket.send(t),
            this.debug(`chunk sent = ${t.length}, remaining = ${e.length}`);
        }
      } else this._webSocket.send(a);
    }
    dispose() {
      if (this.connected)
        try {
          const e = Object.assign({}, this.disconnectHeaders);
          e.receipt || (e.receipt = 'close-' + this._counter++),
            this.watchForReceipt(e.receipt, (e) => {
              this._closeWebsocket(), this._cleanUp(), this.onDisconnect(e);
            }),
            this._transmit({ command: 'DISCONNECT', headers: e });
        } catch (e) {
          this.debug(`Ignoring error during disconnect ${e}`);
        }
      else
        (this._webSocket.readyState !== At.CONNECTING && this._webSocket.readyState !== At.OPEN) ||
          this._closeWebsocket();
    }
    _cleanUp() {
      (this._connected = !1), this._pinger && clearInterval(this._pinger), this._ponger && clearInterval(this._ponger);
    }
    publish(e) {
      const { destination: t, headers: r, body: n, binaryBody: o, skipContentLengthHeader: i } = e,
        s = Object.assign({ destination: t }, r);
      this._transmit({ command: 'SEND', headers: s, body: n, binaryBody: o, skipContentLengthHeader: i });
    }
    watchForReceipt(e, t) {
      this._receiptWatchers[e] = t;
    }
    subscribe(e, t, r = {}) {
      (r = Object.assign({}, r)).id || (r.id = 'sub-' + this._counter++),
        (r.destination = e),
        (this._subscriptions[r.id] = t),
        this._transmit({ command: 'SUBSCRIBE', headers: r });
      const n = this;
      return { id: r.id, unsubscribe: (e) => n.unsubscribe(r.id, e) };
    }
    unsubscribe(e, t = {}) {
      (t = Object.assign({}, t)),
        delete this._subscriptions[e],
        (t.id = e),
        this._transmit({ command: 'UNSUBSCRIBE', headers: t });
    }
    begin(e) {
      const t = e || 'tx-' + this._counter++;
      this._transmit({ command: 'BEGIN', headers: { transaction: t } });
      const r = this;
      return {
        id: t,
        commit() {
          r.commit(t);
        },
        abort() {
          r.abort(t);
        }
      };
    }
    commit(e) {
      this._transmit({ command: 'COMMIT', headers: { transaction: e } });
    }
    abort(e) {
      this._transmit({ command: 'ABORT', headers: { transaction: e } });
    }
    ack(e, t, r = {}) {
      (r = Object.assign({}, r)),
        this._connectedVersion === Pt.V1_2 ? (r.id = e) : (r['message-id'] = e),
        (r.subscription = t),
        this._transmit({ command: 'ACK', headers: r });
    }
    nack(e, t, r = {}) {
      return (
        (r = Object.assign({}, r)),
        this._connectedVersion === Pt.V1_2 ? (r.id = e) : (r['message-id'] = e),
        (r.subscription = t),
        this._transmit({ command: 'NACK', headers: r })
      );
    }
  }
  var Nt =
    (this && this.__awaiter) ||
    function (e, t, r, n) {
      return new (r || (r = Promise))(function (o, i) {
        function s(e) {
          try {
            c(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          try {
            c(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof r
                ? t
                : new r(function (e) {
                    e(t);
                  })).then(s, a);
        }
        c((n = n.apply(e, t || [])).next());
      });
    };
  class Ht {
    constructor(e = {}) {
      (this.stompVersions = Pt.default),
        (this.connectionTimeout = 0),
        (this.reconnectDelay = 5e3),
        (this.heartbeatIncoming = 1e4),
        (this.heartbeatOutgoing = 1e4),
        (this.splitLargeFrames = !1),
        (this.maxWebSocketChunkSize = 8192),
        (this.forceBinaryWSFrames = !1),
        (this.appendMissingNULLonIncoming = !1),
        (this.state = jt.INACTIVE);
      const t = () => {};
      (this.debug = t),
        (this.beforeConnect = t),
        (this.onConnect = t),
        (this.onDisconnect = t),
        (this.onUnhandledMessage = t),
        (this.onUnhandledReceipt = t),
        (this.onUnhandledFrame = t),
        (this.onStompError = t),
        (this.onWebSocketClose = t),
        (this.onWebSocketError = t),
        (this.logRawCommunication = !1),
        (this.onChangeState = t),
        (this.connectHeaders = {}),
        (this._disconnectHeaders = {}),
        this.configure(e);
    }
    get webSocket() {
      return this._stompHandler ? this._stompHandler._webSocket : void 0;
    }
    get disconnectHeaders() {
      return this._disconnectHeaders;
    }
    set disconnectHeaders(e) {
      (this._disconnectHeaders = e),
        this._stompHandler && (this._stompHandler.disconnectHeaders = this._disconnectHeaders);
    }
    get connected() {
      return !!this._stompHandler && this._stompHandler.connected;
    }
    get connectedVersion() {
      return this._stompHandler ? this._stompHandler.connectedVersion : void 0;
    }
    get active() {
      return this.state === jt.ACTIVE;
    }
    _changeState(e) {
      (this.state = e), this.onChangeState(e);
    }
    configure(e) {
      Object.assign(this, e);
    }
    activate() {
      if (this.state === jt.DEACTIVATING)
        throw (
          (this.debug('Still DEACTIVATING, please await call to deactivate before trying to re-activate'),
          new Error('Still DEACTIVATING, can not activate now'))
        );
      this.active
        ? this.debug('Already ACTIVE, ignoring request to activate')
        : (this._changeState(jt.ACTIVE), this._connect());
    }
    _connect() {
      return Nt(this, void 0, void 0, function* () {
        if (this.connected) return void this.debug('STOMP: already connected, nothing to do');
        if ((yield this.beforeConnect(), !this.active))
          return void this.debug('Client has been marked inactive, will not attempt to connect');
        this.connectionTimeout > 0 &&
          (this._connectionWatcher && clearTimeout(this._connectionWatcher),
          (this._connectionWatcher = setTimeout(() => {
            this.connected ||
              (this.debug(`Connection not established in ${this.connectionTimeout}ms, closing socket`),
              this.forceDisconnect());
          }, this.connectionTimeout))),
          this.debug('Opening Web Socket...');
        const e = this._createWebSocket();
        (this._stompHandler = new xt(this, e, {
          debug: this.debug,
          stompVersions: this.stompVersions,
          connectHeaders: this.connectHeaders,
          disconnectHeaders: this._disconnectHeaders,
          heartbeatIncoming: this.heartbeatIncoming,
          heartbeatOutgoing: this.heartbeatOutgoing,
          splitLargeFrames: this.splitLargeFrames,
          maxWebSocketChunkSize: this.maxWebSocketChunkSize,
          forceBinaryWSFrames: this.forceBinaryWSFrames,
          logRawCommunication: this.logRawCommunication,
          appendMissingNULLonIncoming: this.appendMissingNULLonIncoming,
          discardWebsocketOnCommFailure: this.discardWebsocketOnCommFailure,
          onConnect: (e) => {
            if (
              (this._connectionWatcher && (clearTimeout(this._connectionWatcher), (this._connectionWatcher = void 0)),
              !this.active)
            )
              return (
                this.debug('STOMP got connected while deactivate was issued, will disconnect now'),
                void this._disposeStompHandler()
              );
            this.onConnect(e);
          },
          onDisconnect: (e) => {
            this.onDisconnect(e);
          },
          onStompError: (e) => {
            this.onStompError(e);
          },
          onWebSocketClose: (e) => {
            (this._stompHandler = void 0),
              this.state === jt.DEACTIVATING &&
                (this._resolveSocketClose(), (this._resolveSocketClose = void 0), this._changeState(jt.INACTIVE)),
              this.onWebSocketClose(e),
              this.active && this._schedule_reconnect();
          },
          onWebSocketError: (e) => {
            this.onWebSocketError(e);
          },
          onUnhandledMessage: (e) => {
            this.onUnhandledMessage(e);
          },
          onUnhandledReceipt: (e) => {
            this.onUnhandledReceipt(e);
          },
          onUnhandledFrame: (e) => {
            this.onUnhandledFrame(e);
          }
        })),
          this._stompHandler.start();
      });
    }
    _createWebSocket() {
      let e;
      return (
        (e = this.webSocketFactory
          ? this.webSocketFactory()
          : new WebSocket(this.brokerURL, this.stompVersions.protocolVersions())),
        (e.binaryType = 'arraybuffer'),
        e
      );
    }
    _schedule_reconnect() {
      this.reconnectDelay > 0 &&
        (this.debug(`STOMP: scheduling reconnection in ${this.reconnectDelay}ms`),
        (this._reconnector = setTimeout(() => {
          this._connect();
        }, this.reconnectDelay)));
    }
    deactivate() {
      return Nt(this, void 0, void 0, function* () {
        let e;
        return this.state !== jt.ACTIVE
          ? (this.debug(`Already ${jt[this.state]}, ignoring call to deactivate`), Promise.resolve())
          : (this._changeState(jt.DEACTIVATING),
            this._reconnector && clearTimeout(this._reconnector),
            this._stompHandler && this.webSocket.readyState !== At.CLOSED
              ? ((e = new Promise((e, t) => {
                  this._resolveSocketClose = e;
                })),
                this._disposeStompHandler(),
                e)
              : (this._changeState(jt.INACTIVE), Promise.resolve()));
      });
    }
    forceDisconnect() {
      this._stompHandler && this._stompHandler.forceDisconnect();
    }
    _disposeStompHandler() {
      this._stompHandler && (this._stompHandler.dispose(), (this._stompHandler = null));
    }
    publish(e) {
      this._stompHandler.publish(e);
    }
    watchForReceipt(e, t) {
      this._stompHandler.watchForReceipt(e, t);
    }
    subscribe(e, t, r = {}) {
      return this._stompHandler.subscribe(e, t, r);
    }
    unsubscribe(e, t = {}) {
      this._stompHandler.unsubscribe(e, t);
    }
    begin(e) {
      return this._stompHandler.begin(e);
    }
    commit(e) {
      this._stompHandler.commit(e);
    }
    abort(e) {
      this._stompHandler.abort(e);
    }
    ack(e, t, r = {}) {
      this._stompHandler.ack(e, t, r);
    }
    nack(e, t, r = {}) {
      this._stompHandler.nack(e, t, r);
    }
  }
  var It,
    Bt,
    Ft,
    Rt = lt('SYSTEM_EVENT'),
    Dt = lt('OPEN_SITE_SOCKET'),
    Ut = lt('SET_SITE_SOCKET_STATUS'),
    Vt = [],
    Wt = '',
    Lt = { expiresAt: null, token: null },
    $t = !1;
  function Mt(e) {
    var t;
    if ((e.data, 'CrafterCMS-Worker' === self.name))
      switch (null === (t = e.data) || void 0 === t ? void 0 : t.type) {
        case wt.type:
          'active' === Wt ? e.target.postMessage(vt(Lt)) : (zt(), Kt());
          break;
        case mt.type:
          zt(), Kt();
          break;
        case bt.type:
        case Ot.type:
          zt(), Gt(e.target);
          break;
        case St.type:
          Vt = Vt.filter(function (t) {
            return t !== e.target;
          });
          break;
        case Dt.type:
          !(function (e) {
            var t,
              n,
              o = e.site,
              i = e.xsrfToken;
            Ft && Ft.deactivate();
            (Ft = new Ht(
              r(r({ brokerURL: 'ws://localhost:8080/studio/events' }, !1), {
                connectHeaders: ((t = {}), (t['X-XSRF-TOKEN'] = i), t),
                onConnect: function () {
                  qt(Ut({ connected: !0 })),
                    (n = Ft.subscribe('/topic/studio/' + o, function (e) {
                      if (e.body)
                        if ('application/json' === e.headers['content-type']) {
                          var t = JSON.parse(e.body),
                            r = { type: t.eventType, payload: t };
                          qt(Rt(r));
                        } else e.headers['content-type'];
                    }));
                },
                onStompError: function () {
                  qt(Ut({ connected: !1 }));
                },
                onWebSocketError: function () {
                  qt(Ut({ connected: !1 }));
                },
                onDisconnect: function () {
                  null == n || n.unsubscribe();
                }
              })
            )).activate();
          })(e.data.payload);
      }
  }
  function zt() {
    (Wt = ''), (Lt.token = null), (Lt.expiresAt = null);
  }
  function Gt(e) {
    clearTimeout(It), (Wt = 'expired'), qt(gt(), e);
  }
  function Kt() {
    if ((clearTimeout(It), !$t))
      return (
        ($t = !0),
        yt().subscribe({
          next: function (e) {
            return (
              ($t = !1),
              e
                ? ((Wt = 'active'),
                  qt(vt((Lt = e))),
                  (Bt = Math.floor(0.5 * (Lt.expiresAt - Date.now()))),
                  Vt.length ? (It = self.setTimeout(Kt, Bt)) : clearTimeout(It))
                : Gt(),
              Lt
            );
          },
          error: function (e) {
            ($t = !1),
              clearTimeout(It),
              401 === e.status
                ? Gt()
                : ((Wt = 'error'),
                  qt(_t({ status: e.status, message: e.message })),
                  Vt.length && (It = self.setTimeout(Kt, Math.floor(0.9 * Bt))));
          }
        })
      );
  }
  function qt(e, t) {
    (t
      ? Vt.filter(function (e) {
          return e !== t;
        })
      : Vt
    ).forEach(function (t) {
      t.postMessage(e);
    });
  }
  self.onconnect = function (e) {
    var t = e.ports[0];
    Vt.push(t), (t.onmessage = Mt);
  };
})();
