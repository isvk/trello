(this.webpackJsonpbillet = this.webpackJsonpbillet || []).push([
    [0],
    {
        100: function(e, t, n) {},
        101: function(e, t, n) {},
        102: function(e, t, n) {},
        103: function(e, t, n) {},
        138: function(e, t, n) {},
        139: function(e, t, n) {},
        140: function(e, t, n) {},
        141: function(e, t, n) {},
        142: function(e, t, n) {},
        144: function(e, t, n) {},
        145: function(e, t, n) {},
        146: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(0),
                a = n.n(r),
                c = n(20),
                o = n.n(c),
                i = n(11),
                s = n(12),
                u = n(16),
                d = n(64),
                l = n(32),
                m = n(79),
                f = n(66),
                p = "REDIRECT_TO_API_FOR_GET_TOKEN",
                b = "LOGIN_BY_TOKEN",
                E = "LOGOUT_BY_TOKEN";
            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? h(n, !0).forEach(function(t) {
                              Object(f.a)(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : h(n).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            var v,
                j = { idMember: "", token: "", key: "" },
                x = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case b:
                            return O({}, e, { token: t.token });
                        case "LOGIN_BY_TOKEN_SUCCESS":
                            return O({}, e, { idMember: t.idMember });
                        default:
                            return e;
                    }
                },
                S = n(8),
                g = n(25),
                L = n(24),
                w = n(26),
                _ = n(17),
                k = "LOAD_BOARDS";
            !(function(e) {
                (e[(e.isNotLoaded = 0)] = "isNotLoaded"),
                    (e[(e.isLoading = 1)] = "isLoading"),
                    (e[(e.isLoaded = 2)] = "isLoaded"),
                    (e[(e.isError = 3)] = "isError");
            })(v || (v = {}));
            var C,
                D = { boardsLoadingState: v.isNotLoaded, collection: Object(_.a)([]) },
                I = (function(e) {
                    function t() {
                        return Object(S.a)(this, t), Object(g.a)(this, Object(L.a)(t).apply(this, arguments));
                    }
                    return Object(w.a)(t, e), t;
                })(Object(_.b)(D)),
                B = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new I(),
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "ADD_BOARDS":
                            return (
                                t.boards.forEach(function(t) {
                                    e = e.setIn(["collection", t.id], t);
                                }),
                                e.set("boardsLoadingState", v.isLoaded)
                            );
                        case "LOAD_BOARDS_ERROR":
                            return e.set("boardsLoadingState", v.isError);
                        case "SET_CARDS_LOADED":
                            return e.updateIn(["collection", t.id], function(e) {
                                return e && e.set("cardsLoadingState", v.isLoaded);
                            });
                        case "LOAD_CARDS_FOR_BOARD_ERROR":
                            return e.updateIn(["collection", t.id], function(e) {
                                return e && e.set("cardsLoadingState", v.isError);
                            });
                        default:
                            return e;
                    }
                },
                y = "CREATE_LIST",
                N = "UPDATE_LIST",
                T = "DELETE_LIST",
                A = "SORT_LIST",
                R = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(_.a)([]),
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "ADD_LISTS":
                            return (
                                t.lists.forEach(function(t) {
                                    e = e.set(t.id, t);
                                }),
                                e
                            );
                        case "SET_MODE":
                            return e.setIn([t.id, "mode"], t.mode);
                        case "UPDATE_LIST_SUCCESS":
                            return e.set(t.list.id, t.list);
                        case "DELETE_LIST_SUCCESS":
                            return e.delete(t.id);
                        case "SORT_BY_POSITION":
                            return e.sort(function(e, t) {
                                return e.pos < t.pos ? -1 : e.pos > t.pos ? 1 : 0;
                            });
                        default:
                            return e;
                    }
                },
                P = "LOAD_CARDS_FOR_BOARD",
                M = "CREATE_CARD",
                F = "UPDATE_CARD",
                U = "DELETE_CARD",
                z = "SORT_CARD",
                q = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(_.a)([]),
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "ADD_CARDS":
                            return (
                                t.cards.forEach(function(t) {
                                    e = e.set(t.id, t);
                                }),
                                e
                            );
                        case "SET_MODE":
                            return e.setIn([t.id, "mode"], t.mode);
                        case "UPDATE_CARD_SUCCESS":
                            return e.set(t.card.id, t.card);
                        case "DELETE_CARD_SUCCESS":
                            return e.delete(t.id);
                        case "SORT_BY_POSITION":
                            return e.sort(function(e, t) {
                                return e.pos < t.pos ? -1 : e.pos > t.pos ? 1 : 0;
                            });
                        default:
                            return e;
                    }
                };
            !(function(e) {
                (e[(e.viewing = 0)] = "viewing"), (e[(e.editing = 1)] = "editing");
            })(C || (C = {}));
            var H = { id: "", idList: "", name: "", pos: 0, mode: C.viewing },
                Y = (function(e) {
                    function t() {
                        return Object(S.a)(this, t), Object(g.a)(this, Object(L.a)(t).apply(this, arguments));
                    }
                    return Object(w.a)(t, e), t;
                })(Object(_.b)(H)),
                G = new Y(),
                J = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "SET_ID_LIST":
                            return e.set("idList", t.idList);
                        case "SET_NAME":
                            return e.set("name", t.name);
                        case "DELETE_CREATE_CARD":
                            return G;
                        default:
                            return e;
                    }
                },
                K = function(e) {
                    return Object(i.c)({
                        router: Object(l.b)(e),
                        auth: x,
                        boards: B,
                        lists: R,
                        cards: q,
                        createCard: J
                    });
                },
                W = n(4),
                V = n.n(W),
                X = n(68),
                $ = n(2),
                Q = function() {
                    return { type: p };
                },
                Z = function(e) {
                    return { type: b, token: e };
                },
                ee = function(e) {
                    return { type: "LOGIN_BY_TOKEN_SUCCESS", idMember: e };
                },
                te = function(e) {
                    return { type: E, token: e };
                },
                ne = n(9),
                re = function() {
                    document.location.href =
                        "https://trello.com/1/authorize?scope=write&expiration=1day&name=TestTrello&return_url=https://isvk.github.io/trello/build/?scope=read&response_type=token&key=57dec6bd85b077473d5258dd1f499f7b";
                },
                ae = function(e) {
                    return Object(ne.d)("/board/" + e);
                },
                ce = V.a.mark(ue),
                oe = V.a.mark(de),
                ie = V.a.mark(le),
                se = V.a.mark(me);
            function ue() {
                return V.a.wrap(
                    function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.prev = 0), (e.next = 3), re();
                                case 3:
                                    e.next = 8;
                                    break;
                                case 5:
                                    (e.prev = 5), (e.t0 = e.catch(0)), console.error(e.t0);
                                case 8:
                                case "end":
                                    return e.stop();
                            }
                    },
                    ce,
                    null,
                    [[0, 5]]
                );
            }
            function de(e, t) {
                var n;
                return V.a.wrap(
                    function(r) {
                        for (;;)
                            switch ((r.prev = r.next)) {
                                case 0:
                                    return (
                                        (r.prev = 0),
                                        (r.next = 3),
                                        Object($.b)(e.container.ApiAuth.apiGetIdMemberByToken, t.token)
                                    );
                                case 3:
                                    return (
                                        (n = r.sent),
                                        localStorage.setItem("token", t.token),
                                        localStorage.setItem("idMember", n),
                                        (r.next = 8),
                                        Object($.c)(ee(n))
                                    );
                                case 8:
                                    return (r.next = 10), Object($.c)(Object(ne.d)("/board"));
                                case 10:
                                    r.next = 15;
                                    break;
                                case 12:
                                    (r.prev = 12), (r.t0 = r.catch(0)), console.error(r.t0);
                                case 15:
                                case "end":
                                    return r.stop();
                            }
                    },
                    oe,
                    null,
                    [[0, 12]]
                );
            }
            function le(e, t) {
                return V.a.wrap(
                    function(n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (
                                        (n.prev = 0),
                                        (n.next = 3),
                                        Object($.b)(e.container.ApiAuth.apiDeleteToken, t.token)
                                    );
                                case 3:
                                    if (!n.sent) {
                                        n.next = 11;
                                        break;
                                    }
                                    return (
                                        localStorage.removeItem("token"),
                                        localStorage.removeItem("idMember"),
                                        (n.next = 9),
                                        Object($.c)(Object(ne.d)("/"))
                                    );
                                case 9:
                                    n.next = 12;
                                    break;
                                case 11:
                                    throw new Error("Error logout");
                                case 12:
                                    n.next = 17;
                                    break;
                                case 14:
                                    (n.prev = 14), (n.t0 = n.catch(0)), console.error(n.t0);
                                case 17:
                                case "end":
                                    return n.stop();
                            }
                    },
                    ie,
                    null,
                    [[0, 14]]
                );
            }
            function me(e) {
                return V.a.wrap(function(t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), Object($.e)(p, ue);
                            case 2:
                                return (t.next = 4), Object($.e)(b, de, e);
                            case 4:
                                return (t.next = 6), Object($.e)(E, le, e);
                            case 6:
                            case "end":
                                return t.stop();
                        }
                }, se);
            }
            var fe = function() {
                    return { type: k };
                },
                pe = function() {
                    return { type: "LOAD_BOARDS_ERROR" };
                },
                be = function(e) {
                    return { type: "ADD_BOARDS", boards: e };
                },
                Ee = function(e) {
                    return { type: "SET_CARDS_LOADED", id: e };
                },
                he = function(e) {
                    return { type: "LOAD_CARDS_FOR_BOARD_ERROR", id: e };
                },
                Oe = { id: "", name: "", cardsLoadingState: v.isNotLoaded },
                ve = (function(e) {
                    function t() {
                        return Object(S.a)(this, t), Object(g.a)(this, Object(L.a)(t).apply(this, arguments));
                    }
                    return Object(w.a)(t, e), t;
                })(Object(_.b)(Oe)),
                je = { id: "", idBoard: "", name: "", pos: 0, mode: C.viewing },
                xe = (function(e) {
                    function t() {
                        return Object(S.a)(this, t), Object(g.a)(this, Object(L.a)(t).apply(this, arguments));
                    }
                    return Object(w.a)(t, e), t;
                })(Object(_.b)(je)),
                Se = function(e) {
                    return { type: "ADD_LISTS", lists: e };
                },
                ge = function(e) {
                    return { type: "UPDATE_LIST_SUCCESS", list: e };
                },
                Le = function(e) {
                    return { type: "DELETE_LIST_SUCCESS", id: e };
                },
                we = function() {
                    return { type: "SORT_BY_POSITION" };
                },
                _e = function(e, t, n, r) {
                    return { type: A, id: e, idBoard: t, newIndex: n, oldIndex: r };
                },
                ke = V.a.mark(De),
                Ce = V.a.mark(Ie);
            function De(e) {
                var t;
                return V.a.wrap(
                    function(n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (
                                        (n.prev = 0),
                                        (n.next = 3),
                                        Object($.b)(
                                            e.container.ApiBoard.loadBoardsWithListsForIdMember,
                                            localStorage.getItem("idMember") || ""
                                        )
                                    );
                                case 3:
                                    return (
                                        (t = n.sent),
                                        (n.next = 6),
                                        Object($.c)(
                                            be(
                                                t.map(function(e) {
                                                    return new ve(e);
                                                })
                                            )
                                        )
                                    );
                                case 6:
                                    return (
                                        (n.next = 8),
                                        Object($.c)(
                                            Se(
                                                t
                                                    .map(function(e) {
                                                        return e.lists;
                                                    })
                                                    .flat()
                                                    .map(function(e) {
                                                        return new xe(e);
                                                    })
                                            )
                                        )
                                    );
                                case 8:
                                    n.next = 14;
                                    break;
                                case 10:
                                    return (n.prev = 10), (n.t0 = n.catch(0)), (n.next = 14), Object($.c)(pe());
                                case 14:
                                case "end":
                                    return n.stop();
                            }
                    },
                    ke,
                    null,
                    [[0, 10]]
                );
            }
            function Ie(e) {
                return V.a.wrap(function(t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), Object($.e)(k, De, e);
                            case 2:
                            case "end":
                                return t.stop();
                        }
                }, Ce);
            }
            var Be = n(18),
                ye = function(e, t) {
                    return t;
                },
                Ne = function(e) {
                    return e.auth;
                },
                Te =
                    (Object(Be.a)(Ne, function(e) {
                        return e.idMember;
                    }),
                    Object(Be.a)(Ne, function(e) {
                        return e.token;
                    }),
                    Object(Be.a)(Ne, function(e) {
                        return e.key;
                    }),
                    function(e) {
                        return e.boards;
                    }),
                Ae = Object(Be.a)(Te, function(e) {
                    return e.boardsLoadingState;
                }),
                Re = Object(Be.a)(Te, function(e) {
                    return e.collection;
                }),
                Pe = Object(Be.a)(Re, ye, function(e, t) {
                    return e.get(t);
                }),
                Me = function(e) {
                    return e.lists;
                },
                Fe = Object(Be.a)(Me, ye, function(e, t) {
                    return e.filter(function(e) {
                        return e.idBoard === t;
                    });
                }),
                Ue = Object(Be.a)(Me, ye, function(e, t) {
                    return e.find(function(e) {
                        return e.id === t;
                    });
                }),
                ze = function(e) {
                    return e.cards;
                },
                qe = Object(Be.a)(ze, ye, function(e, t) {
                    return e.filter(function(e) {
                        return e.idList === t;
                    });
                }),
                He = Object(Be.a)(ze, ye, function(e, t) {
                    return e.find(function(e) {
                        return e.id === t;
                    });
                }),
                Ye = function(e) {
                    return e.createCard;
                },
                Ge = Object(Be.a)(Ye, function(e) {
                    return e.idList;
                }),
                Je =
                    (Object(Be.a)(Ye, function(e) {
                        return e.name;
                    }),
                    V.a.mark($e)),
                Ke = V.a.mark(Qe),
                We = V.a.mark(Ze),
                Ve = V.a.mark(et),
                Xe = V.a.mark(tt);
            function $e(e, t) {
                var n;
                return V.a.wrap(
                    function(r) {
                        for (;;)
                            switch ((r.prev = r.next)) {
                                case 0:
                                    return (
                                        (r.prev = 0),
                                        (r.next = 3),
                                        Object($.b)(e.container.ApiList.create, t.idList, t.name)
                                    );
                                case 3:
                                    return (n = r.sent), (r.next = 6), Object($.c)(Se([new xe(n)]));
                                case 6:
                                    r.next = 11;
                                    break;
                                case 8:
                                    (r.prev = 8), (r.t0 = r.catch(0)), console.error(r.t0);
                                case 11:
                                case "end":
                                    return r.stop();
                            }
                    },
                    Je,
                    null,
                    [[0, 8]]
                );
            }
            function Qe(e, t) {
                var n;
                return V.a.wrap(
                    function(r) {
                        for (;;)
                            switch ((r.prev = r.next)) {
                                case 0:
                                    return (
                                        (r.prev = 0),
                                        (r.next = 3),
                                        Object($.b)(e.container.ApiList.update, t.id, t.list.toJS())
                                    );
                                case 3:
                                    return (n = r.sent), (r.next = 6), Object($.c)(ge(new xe(n)));
                                case 6:
                                    return (r.next = 8), Object($.c)(we());
                                case 8:
                                    r.next = 13;
                                    break;
                                case 10:
                                    (r.prev = 10), (r.t0 = r.catch(0)), console.error(r.t0);
                                case 13:
                                case "end":
                                    return r.stop();
                            }
                    },
                    Ke,
                    null,
                    [[0, 10]]
                );
            }
            function Ze(e, t) {
                return V.a.wrap(
                    function(n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (n.prev = 0), (n.next = 3), Object($.b)(e.container.ApiList.delete, t.id);
                                case 3:
                                    return (n.next = 5), Object($.c)(Le(t.id));
                                case 5:
                                    n.next = 10;
                                    break;
                                case 7:
                                    (n.prev = 7), (n.t0 = n.catch(0)), console.error(n.t0);
                                case 10:
                                case "end":
                                    return n.stop();
                            }
                    },
                    We,
                    null,
                    [[0, 7]]
                );
            }
            function et(e, t) {
                var n, r, a, c, o, i, s, u;
                return V.a.wrap(
                    function(d) {
                        for (;;)
                            switch ((d.prev = d.next)) {
                                case 0:
                                    return (
                                        (d.prev = 0),
                                        (n = function(e, t) {
                                            var n = e.skip(t).first();
                                            return n ? n.pos : 0;
                                        }),
                                        (d.next = 4),
                                        Object($.d)(Ue, t.id)
                                    );
                                case 4:
                                    if ((r = d.sent)) {
                                        d.next = 7;
                                        break;
                                    }
                                    throw new Error("Error not found list");
                                case 7:
                                    return (d.next = 9), Object($.d)(Fe, t.idBoard);
                                case 9:
                                    return (
                                        (a = d.sent),
                                        (c = 0),
                                        0 === t.newIndex
                                            ? (c = n(a, 0) / 2)
                                            : t.newIndex === a.size - 1
                                            ? (c = 2 * n(a, t.newIndex))
                                            : ((o = 0),
                                              t.newIndex > t.oldIndex && (o = 1),
                                              (i = n(a, t.newIndex - 1 + o)),
                                              (s = n(a, t.newIndex + o)),
                                              (c = (i + s) / 2)),
                                        (r = r.merge({ pos: c })),
                                        (d.next = 15),
                                        Object($.c)(Se([r]))
                                    );
                                case 15:
                                    return (d.next = 17), Object($.c)(we());
                                case 17:
                                    return (d.next = 19), Object($.b)(e.container.ApiList.update, t.id, r.toJS());
                                case 19:
                                    if (((u = d.sent), r.pos === u.pos)) {
                                        d.next = 23;
                                        break;
                                    }
                                    return (d.next = 23), Object($.c)(fe());
                                case 23:
                                    d.next = 28;
                                    break;
                                case 25:
                                    (d.prev = 25), (d.t0 = d.catch(0)), console.error(d.t0);
                                case 28:
                                case "end":
                                    return d.stop();
                            }
                    },
                    Ve,
                    null,
                    [[0, 25]]
                );
            }
            function tt(e) {
                return V.a.wrap(function(t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), Object($.e)(y, $e, e);
                            case 2:
                                return (t.next = 4), Object($.e)(N, Qe, e);
                            case 4:
                                return (t.next = 6), Object($.e)(T, Ze, e);
                            case 6:
                                return (t.next = 8), Object($.e)(A, et, e);
                            case 8:
                            case "end":
                                return t.stop();
                        }
                }, Xe);
            }
            var nt = function(e) {
                    return { type: "ADD_CARDS", cards: e };
                },
                rt = function(e) {
                    return { type: P, idBoard: e };
                },
                at = function(e, t) {
                    return { type: M, idList: e, name: t };
                },
                ct = function(e, t) {
                    return { type: "SET_MODE", id: e, mode: t };
                },
                ot = function(e, t) {
                    return { type: F, id: e, card: t };
                },
                it = function(e) {
                    return { type: "UPDATE_CARD_SUCCESS", card: e };
                },
                st = function(e) {
                    return { type: U, id: e };
                },
                ut = function(e) {
                    return { type: "DELETE_CARD_SUCCESS", id: e };
                },
                dt = function() {
                    return { type: "SORT_BY_POSITION" };
                },
                lt = function(e, t, n, r, a) {
                    return { type: z, id: e, idList: t, idBoard: n, newIndex: r, oldIndex: a };
                },
                mt = function(e) {
                    return { type: "SET_NAME", name: e };
                },
                ft = function(e) {
                    return { type: "SET_ID_LIST", idList: e };
                },
                pt = function() {
                    return { type: "DELETE_CREATE_CARD" };
                },
                bt = V.a.mark(xt),
                Et = V.a.mark(St),
                ht = V.a.mark(gt),
                Ot = V.a.mark(Lt),
                vt = V.a.mark(wt),
                jt = V.a.mark(_t);
            function xt(e, t) {
                var n;
                return V.a.wrap(
                    function(r) {
                        for (;;)
                            switch ((r.prev = r.next)) {
                                case 0:
                                    return (
                                        (r.prev = 0),
                                        (r.next = 3),
                                        Object($.b)(e.container.ApiCard.loadCardsForBoard, t.idBoard)
                                    );
                                case 3:
                                    return (
                                        (n = r.sent),
                                        (r.next = 6),
                                        Object($.c)(
                                            nt(
                                                n.map(function(e) {
                                                    return new Y(e);
                                                })
                                            )
                                        )
                                    );
                                case 6:
                                    return (r.next = 8), Object($.c)(dt());
                                case 8:
                                    return (r.next = 10), Object($.c)(Ee(t.idBoard));
                                case 10:
                                    r.next = 16;
                                    break;
                                case 12:
                                    return (
                                        (r.prev = 12), (r.t0 = r.catch(0)), (r.next = 16), Object($.c)(he(t.idBoard))
                                    );
                                case 16:
                                case "end":
                                    return r.stop();
                            }
                    },
                    bt,
                    null,
                    [[0, 12]]
                );
            }
            function St(e, t) {
                var n;
                return V.a.wrap(
                    function(r) {
                        for (;;)
                            switch ((r.prev = r.next)) {
                                case 0:
                                    return (
                                        (r.prev = 0),
                                        (r.next = 3),
                                        Object($.b)(e.container.ApiCard.create, t.idList, t.name)
                                    );
                                case 3:
                                    return (n = r.sent), (r.next = 6), Object($.c)(nt([new Y(n)]));
                                case 6:
                                    return (r.next = 8), Object($.c)(pt());
                                case 8:
                                    r.next = 13;
                                    break;
                                case 10:
                                    (r.prev = 10), (r.t0 = r.catch(0)), console.error(r.t0);
                                case 13:
                                case "end":
                                    return r.stop();
                            }
                    },
                    Et,
                    null,
                    [[0, 10]]
                );
            }
            function gt(e, t) {
                var n;
                return V.a.wrap(
                    function(r) {
                        for (;;)
                            switch ((r.prev = r.next)) {
                                case 0:
                                    return (
                                        (r.prev = 0),
                                        (r.next = 3),
                                        Object($.b)(e.container.ApiCard.update, t.id, t.card.toJS())
                                    );
                                case 3:
                                    return (n = r.sent), (r.next = 6), Object($.c)(it(new Y(n)));
                                case 6:
                                    return (r.next = 8), Object($.c)(dt());
                                case 8:
                                    r.next = 13;
                                    break;
                                case 10:
                                    (r.prev = 10), (r.t0 = r.catch(0)), console.error(r.t0);
                                case 13:
                                case "end":
                                    return r.stop();
                            }
                    },
                    ht,
                    null,
                    [[0, 10]]
                );
            }
            function Lt(e, t) {
                return V.a.wrap(
                    function(n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (n.prev = 0), (n.next = 3), Object($.b)(e.container.ApiCard.delete, t.id);
                                case 3:
                                    return (n.next = 5), Object($.c)(ut(t.id));
                                case 5:
                                    n.next = 10;
                                    break;
                                case 7:
                                    (n.prev = 7), (n.t0 = n.catch(0)), console.error(n.t0);
                                case 10:
                                case "end":
                                    return n.stop();
                            }
                    },
                    Ot,
                    null,
                    [[0, 7]]
                );
            }
            function wt(e, t) {
                var n, r, a, c, o, i, s, u, d;
                return V.a.wrap(
                    function(l) {
                        for (;;)
                            switch ((l.prev = l.next)) {
                                case 0:
                                    return (
                                        (l.prev = 0),
                                        (n = function(e, t) {
                                            var n = e.skip(t).first();
                                            return n ? n.pos : 0;
                                        }),
                                        (l.next = 4),
                                        Object($.d)(He, t.id)
                                    );
                                case 4:
                                    if ((r = l.sent)) {
                                        l.next = 7;
                                        break;
                                    }
                                    throw new Error("Error not found card");
                                case 7:
                                    return (l.next = 9), Object($.d)(qe, t.idList);
                                case 9:
                                    return (
                                        (a = l.sent),
                                        (c = 0),
                                        (o = 0),
                                        t.idList !== r.idList && (o = 1),
                                        0 === t.newIndex
                                            ? (c = n(a, 0) / 2)
                                            : t.newIndex === a.size - 1 + o
                                            ? (c = 2 * n(a, t.newIndex - o))
                                            : ((i = 0),
                                              t.newIndex > t.oldIndex && t.idList === r.idList && (i = 1),
                                              (s = n(a, t.newIndex - 1 + i)),
                                              (u = n(a, t.newIndex + i)),
                                              (c = (s + u) / 2)),
                                        (r = r.merge({ idList: t.idList, pos: c })),
                                        (l.next = 17),
                                        Object($.c)(nt([r]))
                                    );
                                case 17:
                                    return (l.next = 19), Object($.c)(dt());
                                case 19:
                                    return (l.next = 21), Object($.b)(e.container.ApiCard.update, t.id, r.toJS());
                                case 21:
                                    if (((d = l.sent), r.pos === d.pos)) {
                                        l.next = 25;
                                        break;
                                    }
                                    return (l.next = 25), Object($.c)(rt(t.idBoard));
                                case 25:
                                    l.next = 30;
                                    break;
                                case 27:
                                    (l.prev = 27), (l.t0 = l.catch(0)), console.error(l.t0);
                                case 30:
                                case "end":
                                    return l.stop();
                            }
                    },
                    vt,
                    null,
                    [[0, 27]]
                );
            }
            function _t(e) {
                return V.a.wrap(function(t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), Object($.e)(P, xt, e);
                            case 2:
                                return (t.next = 4), Object($.e)(M, St, e);
                            case 4:
                                return (t.next = 6), Object($.e)(F, gt, e);
                            case 6:
                                return (t.next = 8), Object($.e)(U, Lt, e);
                            case 8:
                                return (t.next = 10), Object($.e)(z, wt, e);
                            case 10:
                            case "end":
                                return t.stop();
                        }
                }, jt);
            }
            var kt = n(69),
                Ct = new (n.n(kt).a)(),
                Dt = Ct;
            Ct.service("Http", function e() {
                var t = this;
                Object(S.a)(this, e),
                    (this.get = function(e, n) {
                        return t.request("GET", e, n);
                    }),
                    (this.post = function(e, n) {
                        return t.request("POST", e, n);
                    }),
                    (this.put = function(e, n) {
                        return t.request("PUT", e, n);
                    }),
                    (this.delete = function(e, n) {
                        return t.request("DELETE", e, n);
                    }),
                    (this.request = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        n.idMember || (n.idMember = localStorage.getItem("idMember")),
                            n.token || (n.token = localStorage.getItem("token")),
                            n.key ||
                                (n.key = Object({
                                    NODE_ENV: "production",
                                    PUBLIC_URL: "/trello/build"
                                }).REACT_APP_API_KEY);
                        var r = Object.keys(n)
                            .map(function(e) {
                                return e + "=" + n[e];
                            })
                            .join("&");
                        return fetch("https://api.trello.com/1/" + t + "?" + r, { method: e }).then(function(e) {
                            return e.json();
                        });
                    });
            }),
                Ct.service(
                    "ApiAuth",
                    function e(t) {
                        var n = this;
                        Object(S.a)(this, e),
                            (this.http = void 0),
                            (this.apiGetIdMemberByToken = function(e) {
                                return n.http.get("tokens/" + e + "/", { token: e }).then(function(e) {
                                    return e.idMember;
                                });
                            }),
                            (this.apiDeleteToken = function(e) {
                                return n.http.delete("tokens/" + e + "/").then(function(e) {
                                    return null === e._value;
                                });
                            }),
                            (this.http = t);
                    },
                    "Http"
                ),
                Ct.service(
                    "ApiBoard",
                    function e(t) {
                        var n = this;
                        Object(S.a)(this, e),
                            (this.http = void 0),
                            (this.loadBoardsWithListsForIdMember = function(e) {
                                return n.http.get("members/" + e + "/boards", { boards: "all", lists: "all" });
                            }),
                            (this.http = t);
                    },
                    "Http"
                ),
                Ct.service(
                    "ApiList",
                    function e(t) {
                        var n = this;
                        Object(S.a)(this, e),
                            (this.http = void 0),
                            (this.create = function(e, t) {
                                return n.http.post("lists", { idList: e, name: t, keepFromSource: "all" });
                            }),
                            (this.update = function(e, t) {
                                return n.http.put("lists/" + e, t);
                            }),
                            (this.delete = function(e) {
                                return n.http.delete("lists/" + e);
                            }),
                            (this.http = t);
                    },
                    "Http"
                ),
                Ct.service(
                    "ApiCard",
                    function e(t) {
                        var n = this;
                        Object(S.a)(this, e),
                            (this.http = void 0),
                            (this.loadCardsForBoard = function(e) {
                                return n.http.get("boards/" + e + "/cards/");
                            }),
                            (this.create = function(e, t) {
                                return n.http.post("cards", { idList: e, name: t, keepFromSource: "all" });
                            }),
                            (this.update = function(e, t) {
                                return n.http.put("cards/" + e, t);
                            }),
                            (this.delete = function(e) {
                                return n.http.delete("cards/" + e);
                            }),
                            (this.http = t);
                    },
                    "Http"
                );
            Boolean(
                "localhost" === window.location.hostname ||
                    "[::1]" === window.location.hostname ||
                    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
            );
            var It = n(70),
                Bt = n(10);
            n(92);
            function yt() {
                return Object(s.d)();
            }
            function Nt() {
                var e = yt();
                return a.a.createElement(
                    "a",
                    {
                        href: "#",
                        className: "btn-auth",
                        onClick: function() {
                            return e(Q());
                        }
                    },
                    "\u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430"
                );
            }
            function Tt() {
                return a.a.createElement(
                    "div",
                    { className: "mainPage" },
                    a.a.createElement(
                        "div",
                        { className: "formLogin" },
                        a.a.createElement(
                            "h1",
                            { className: "title" },
                            "\u041a\u043b\u0438\u0435\u043d\u0442 \u0434\u043b\u044f Trello API"
                        ),
                        a.a.createElement(
                            "div",
                            null,
                            "\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!!! \u0412 \u044d\u0442\u043e\u043c \u043a\u043b\u0438\u0435\u043d\u0442\u0435 \u0435\u0441\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a,",
                            a.a.createElement("br", null),
                            "\u0447\u0442\u043e \u0431\u044b \u043d\u0435 \u0440\u0438\u0441\u043a\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0438\u043c\u0438 \u0440\u0430\u0431\u043e\u0447\u0438\u043c\u0438 \u0434\u043e\u0441\u043a\u0430\u043c\u0438, \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u043c \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u043c."
                        ),
                        a.a.createElement(
                            "ol",
                            null,
                            a.a.createElement(
                                "li",
                                null,
                                a.a.createElement(
                                    "p",
                                    null,
                                    "\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043d\u0430",
                                    " ",
                                    a.a.createElement(
                                        "a",
                                        { href: "https://trello.com/login", target: "_blank" },
                                        "trello.com"
                                    ),
                                    " ",
                                    "\u043f\u043e\u0434 \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u043c \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u043c"
                                ),
                                a.a.createElement(
                                    "p",
                                    null,
                                    "\u041b\u043e\u0433\u0438\u043d: ",
                                    a.a.createElement("strong", null, "test-of-war@yandex.ru")
                                ),
                                a.a.createElement(
                                    "p",
                                    null,
                                    "\u041f\u0430\u0440\u043e\u043b\u044c: ",
                                    a.a.createElement("strong", null, "Test1234567")
                                )
                            ),
                            a.a.createElement(
                                "li",
                                null,
                                "\u041f\u043e\u0441\u043b\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0434\u043b\u044f ",
                                a.a.createElement(Nt, null)
                            ),
                            a.a.createElement(
                                "li",
                                null,
                                '\u041d\u0430 \u043e\u0442\u043a\u0440\u044b\u0432\u0448\u0435\u0439\u0441\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c"'
                            )
                        )
                    )
                );
            }
            n(93);
            function At() {
                var e = document.getElementById("preloader-root");
                return e
                    ? o.a.createPortal(
                          a.a.createElement(
                              "div",
                              { id: "preloader" },
                              a.a.createElement(
                                  "div",
                                  { className: "preloader" },
                                  a.a.createElement("div", null),
                                  a.a.createElement("div", null),
                                  a.a.createElement("div", null),
                                  a.a.createElement("div", null),
                                  a.a.createElement("div", null),
                                  a.a.createElement("div", null),
                                  a.a.createElement("div", null),
                                  a.a.createElement("div", null),
                                  a.a.createElement("div", null),
                                  a.a.createElement("div", null)
                              )
                          ),
                          e
                      )
                    : a.a.createElement(a.a.Fragment, null);
            }
            function Rt() {
                var e = yt(),
                    t = Object(Bt.f)().hash.replace("#token=", "");
                return (
                    Object(r.useEffect)(
                        function() {
                            e(Z(t));
                        },
                        [e, t]
                    ),
                    a.a.createElement(At, null)
                );
            }
            function Pt(e, t) {
                return Object(s.e)(function(n) {
                    return e(n, t);
                });
            }
            function Mt() {
                var e = yt(),
                    t = Pt(Te);
                switch (
                    (Object(r.useEffect)(
                        function() {
                            e(fe());
                        },
                        [e]
                    ),
                    t.boardsLoadingState)
                ) {
                    case v.isNotLoaded:
                    case v.isLoading:
                        return a.a.createElement(At, null);
                    case v.isError:
                        return a.a.createElement("h1", null, "Error loading boards");
                }
                return a.a.createElement(a.a.Fragment, null);
            }
            var Ft = n(41),
                Ut = n(153),
                zt = n(152);
            n(94), n(95);
            function qt() {
                var e = yt(),
                    t = localStorage.getItem("token") || "";
                return a.a.createElement(
                    "button",
                    {
                        className: "logout",
                        onClick: function() {
                            return e(te(t));
                        }
                    },
                    "\u0412\u044b\u0445\u043e\u0434"
                );
            }
            function Ht(e) {
                return a.a.createElement(
                    "div",
                    { className: "pageListBoards" },
                    a.a.createElement(
                        "div",
                        { className: "head" },
                        a.a.createElement(
                            Ft.a,
                            { to: "/", className: "linkHome" },
                            a.a.createElement(zt.a, { size: "20", className: "iconHome" })
                        ),
                        a.a.createElement(qt, null)
                    ),
                    a.a.createElement(
                        "div",
                        { className: "wrapper-content" },
                        a.a.createElement(
                            "div",
                            { className: "contentPageListBoards" },
                            a.a.createElement(
                                "h1",
                                { className: "title" },
                                a.a.createElement(Ut.a, { size: "18", className: "icon" }),
                                "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043e\u0441\u043a\u0443"
                            ),
                            a.a.createElement(
                                "ul",
                                { className: "listLinkBoards" },
                                e.boards.collection.valueSeq().map(function(e) {
                                    return a.a.createElement(
                                        "li",
                                        { key: e.id },
                                        a.a.createElement(
                                            Ft.a,
                                            { to: "/board/" + e.id, className: "linkBoard" },
                                            e.name
                                        )
                                    );
                                })
                            )
                        )
                    )
                );
            }
            function Yt() {
                var e = Pt(Te);
                return e.boardsLoadingState === v.isNotLoaded
                    ? a.a.createElement(Mt, null)
                    : a.a.createElement(Ht, { boards: e });
            }
            function Gt(e) {
                var t = yt();
                switch (
                    (Object(r.useEffect)(
                        function() {
                            t(rt(e.board.id));
                        },
                        [e.board, t]
                    ),
                    e.board.cardsLoadingState)
                ) {
                    case v.isNotLoaded:
                    case v.isLoading:
                        return a.a.createElement(At, null);
                    case v.isError:
                        return a.a.createElement("h1", null, "Error loading cards");
                }
                return a.a.createElement(a.a.Fragment, null);
            }
            var Jt = n(28),
                Kt = n(75);
            n(97);
            function Wt(e) {
                return a.a.createElement(
                    "button",
                    { className: "editCardButton", onClick: e.handleSetModeEditing },
                    a.a.createElement(Kt.a, { size: "14" })
                );
            }
            function Vt(e) {
                var t = yt();
                return a.a.createElement(Wt, {
                    handleSetModeEditing: function() {
                        return t(ct(e.idCard, C.editing));
                    }
                });
            }
            var Xt = n(42);
            n(98);
            function $t(e) {
                var t = document.getElementById("modal-root");
                return t
                    ? o.a.createPortal(
                          a.a.createElement(
                              "div",
                              { id: "openModal", className: "modal" },
                              a.a.createElement(
                                  "div",
                                  { className: "modalDialog" },
                                  a.a.createElement(
                                      "div",
                                      { className: "modalContent" },
                                      a.a.createElement(
                                          "div",
                                          { className: "modal-header" },
                                          a.a.createElement("h3", { className: "modalTitle" }, e.title),
                                          a.a.createElement(
                                              "a",
                                              {
                                                  href: "#close",
                                                  title: "Close",
                                                  className: "close",
                                                  onClick: e.onClose
                                              },
                                              "\xd7"
                                          )
                                      ),
                                      a.a.createElement("div", { className: "modalBody" }, e.children)
                                  )
                              )
                          ),
                          t
                      )
                    : a.a.createElement(a.a.Fragment, null);
            }
            var Qt = n(154);
            n(99);
            function Zt(e) {
                return a.a.createElement(
                    a.a.Fragment,
                    null,
                    e.showModal &&
                        a.a.createElement(
                            $t,
                            {
                                title:
                                    "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443?",
                                onClose: e.handleCloseModal
                            },
                            a.a.createElement(
                                "div",
                                { className: "wrapperButtons" },
                                a.a.createElement("button", { onClick: e.handleConfirmationDelete }, "\u0414\u0430"),
                                a.a.createElement("button", { onClick: e.handleCloseModal }, "\u041d\u0435\u0442")
                            )
                        ),
                    a.a.createElement(
                        "button",
                        { className: "deleteCardButton", onClick: e.handleButtonDelete },
                        a.a.createElement(Qt.a, { size: "14" })
                    )
                );
            }
            function en(e) {
                var t = yt(),
                    n = Object(r.useState)(),
                    c = Object(Xt.a)(n, 2),
                    o = c[0],
                    i = c[1];
                return a.a.createElement(Zt, {
                    showModal: o,
                    handleCloseModal: function() {
                        return i(!1);
                    },
                    handleButtonDelete: function() {
                        i(!0);
                    },
                    handleConfirmationDelete: function() {
                        t(st(e.idCard)), i(!1);
                    }
                });
            }
            n(100);
            function tn(e) {
                return a.a.createElement(
                    "div",
                    { className: "card" },
                    a.a.createElement(
                        "div",
                        { className: "panel" },
                        a.a.createElement(Vt, { idCard: e.card.id }),
                        a.a.createElement(en, { idCard: e.card.id })
                    ),
                    a.a.createElement("div", { className: "name" }, e.card.name)
                );
            }
            function nn(e) {
                return a.a.createElement(tn, { card: e.card });
            }
            var rn = n(155);
            n(101);
            function an(e) {
                return a.a.createElement(
                    "button",
                    { className: "createCardButton", onClick: e.handleShowCreateCardForm },
                    a.a.createElement(rn.a, { size: "20" }),
                    "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0451 \u043e\u0434\u043d\u0443 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"
                );
            }
            function cn(e) {
                var t = yt();
                return a.a.createElement(an, {
                    handleShowCreateCardForm: function() {
                        t(ft(e.idList));
                    }
                });
            }
            var on = n(156);
            n(102);
            function sn(e) {
                var t = Object(r.useRef)(null);
                return (
                    Object(r.useEffect)(function() {
                        t.current && t.current.focus();
                    }, []),
                    a.a.createElement(
                        "div",
                        { className: "nameCardForm" },
                        a.a.createElement("textarea", {
                            value: e.name,
                            onChange: function(t) {
                                return e.handleChangeName(t.target.value);
                            },
                            placeholder:
                                "\u0412\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0434\u043b\u044f \u044d\u0442\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",
                            ref: t
                        }),
                        a.a.createElement(
                            "div",
                            { className: "panel" },
                            a.a.createElement(
                                "button",
                                { className: "saveCardButton", onClick: e.handleButtonSave },
                                "create" === e.typeSave &&
                                    a.a.createElement(
                                        a.a.Fragment,
                                        null,
                                        "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"
                                    ),
                                "update" === e.typeSave &&
                                    a.a.createElement(
                                        a.a.Fragment,
                                        null,
                                        "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"
                                    )
                            ),
                            a.a.createElement(
                                "button",
                                { className: "closeNameCardForm", onClick: e.handleButtonClose },
                                a.a.createElement(on.a, { size: "20" })
                            )
                        )
                    )
                );
            }
            function un(e) {
                var t = yt(),
                    n = Object(r.useState)(e.card),
                    c = Object(Xt.a)(n, 2),
                    o = c[0],
                    i = c[1];
                return a.a.createElement(sn, {
                    name: o.name,
                    handleChangeName: function(t) {
                        return i(e.card.set("name", t));
                    },
                    handleButtonClose: function() {
                        return t(ct(e.card.id, C.viewing));
                    },
                    handleButtonSave: function() {
                        return t(ot(o.id, o));
                    },
                    typeSave: "update"
                });
            }
            function dn() {
                var e = yt(),
                    t = Pt(Ye);
                return a.a.createElement(sn, {
                    name: t.name,
                    handleChangeName: function(t) {
                        return e(mt(t));
                    },
                    handleButtonClose: function() {
                        return e(pt());
                    },
                    handleButtonSave: function() {
                        return e(at(t.idList, t.name));
                    },
                    typeSave: "create"
                });
            }
            n(103);
            function ln(e) {
                return a.a.createElement(Jt.c, { droppableId: e.idList }, function(t) {
                    return a.a.createElement(
                        "div",
                        Object.assign({}, t.droppableProps, { ref: t.innerRef, className: "cardList" }),
                        e.cards.valueSeq().map(function(e, t) {
                            return e.mode === C.editing
                                ? a.a.createElement(un, { key: e.id, card: e })
                                : a.a.createElement(Jt.b, { draggableId: e.id, index: t, key: e.id }, function(t) {
                                      return a.a.createElement(
                                          "div",
                                          Object.assign({}, t.draggableProps, t.dragHandleProps, { ref: t.innerRef }),
                                          a.a.createElement(nn, { key: e.id, card: e })
                                      );
                                  });
                        }),
                        e.idList === e.createCardIdList
                            ? a.a.createElement(dn, null)
                            : a.a.createElement(cn, { idList: e.idList }),
                        t.placeholder
                    );
                });
            }
            function mn(e) {
                var t = Pt(Ge);
                return a.a.createElement(ln, { cards: e.cards, idList: e.idList, createCardIdList: t });
            }
            n(138);
            function fn(e) {
                return a.a.createElement(
                    "div",
                    { className: "list" },
                    a.a.createElement(
                        "div",
                        { className: "title" },
                        a.a.createElement("div", { className: "name" }, e.list.name),
                        a.a.createElement("div", { className: "amountCards" }, "(", e.cards.size, ")")
                    ),
                    a.a.createElement(mn, { cards: e.cards, idList: e.list.id })
                );
            }
            function pn(e) {
                var t = Pt(qe, e.list.id);
                return a.a.createElement(fn, { list: e.list, cards: t });
            }
            n(139);
            function bn(e) {
                return a.a.createElement(
                    Jt.a,
                    { onDragEnd: e.onDragEnd },
                    a.a.createElement(
                        Jt.c,
                        { droppableId: e.idBoard, direction: "horizontal", type: "column" },
                        function(t) {
                            return a.a.createElement(
                                "div",
                                Object.assign({}, t.droppableProps, { ref: t.innerRef, className: "listList" }),
                                e.lists.valueSeq().map(function(e, t) {
                                    return a.a.createElement(Jt.b, { draggableId: e.id, index: t, key: e.id }, function(
                                        t
                                    ) {
                                        return a.a.createElement(
                                            "div",
                                            Object.assign({}, t.draggableProps, t.dragHandleProps, {
                                                ref: t.innerRef,
                                                className: "wrapperList"
                                            }),
                                            a.a.createElement(pn, { list: e, key: e.id })
                                        );
                                    });
                                }),
                                t.placeholder
                            );
                        }
                    )
                );
            }
            function En(e) {
                var t = Pt(Fe, e.idBoard),
                    n = yt();
                return a.a.createElement(bn, {
                    idBoard: e.idBoard,
                    lists: t,
                    onDragEnd: function(t) {
                        if (
                            !t.destination ||
                            (t.destination.index === t.source.index &&
                                t.destination.droppableId === t.source.droppableId)
                        )
                            return !1;
                        t.destination.droppableId === e.idBoard
                            ? n(_e(t.draggableId, t.destination.droppableId, t.destination.index, t.source.index))
                            : n(
                                  lt(
                                      t.draggableId,
                                      t.destination.droppableId,
                                      e.idBoard,
                                      t.destination.index,
                                      t.source.index
                                  )
                              );
                    }
                });
            }
            n(140);
            function hn(e) {
                return a.a.createElement(
                    "div",
                    { className: "buttonSelectBoard" },
                    a.a.createElement(
                        "span",
                        { className: "title" },
                        "\u0412\u044b\u0431\u043e\u0440 \u0434\u043e\u0441\u043a\u0438:"
                    ),
                    a.a.createElement(
                        "select",
                        {
                            onChange: function(t) {
                                return e.handleRedirectToBoard(t.target.value);
                            },
                            value: e.idBoard
                        },
                        e.boards.collection.valueSeq().map(function(e) {
                            return a.a.createElement("option", { value: e.id, key: e.id }, e.name);
                        })
                    )
                );
            }
            function On(e) {
                var t = Object(s.d)(),
                    n = Pt(Te);
                return a.a.createElement(hn, {
                    boards: n,
                    idBoard: e.idBoard,
                    handleRedirectToBoard: function(e) {
                        t(ae(e));
                    }
                });
            }
            n(141);
            function vn(e) {
                return a.a.createElement(
                    "div",
                    { className: "navBar" },
                    a.a.createElement(On, { idBoard: e.idBoard }),
                    a.a.createElement(qt, null)
                );
            }
            n(142);
            function jn(e) {
                return a.a.createElement(
                    "div",
                    { className: "board" },
                    a.a.createElement(vn, { idBoard: e.idBoard }),
                    a.a.createElement(En, { idBoard: e.idBoard })
                );
            }
            function xn() {
                var e = Object(Bt.g)().idBoard,
                    t = Pt(Ae),
                    n = Pt(Pe, e);
                return t === v.isNotLoaded
                    ? a.a.createElement(Mt, null)
                    : n
                    ? n.cardsLoadingState === v.isNotLoaded
                        ? a.a.createElement(Gt, { board: n })
                        : a.a.createElement(jn, { idBoard: n.id })
                    : a.a.createElement("h1", null, "404");
            }
            n(143), n(144);
            var Sn = function() {
                return a.a.createElement(
                    Bt.c,
                    null,
                    a.a.createElement(Bt.a, { exact: !0, path: "/", component: Tt }),
                    a.a.createElement(Bt.a, { exact: !0, path: "/auth" }),
                    a.a.createElement(Bt.a, { path: "/?scope=read&response_type=token", component: Rt }),
                    a.a.createElement(Bt.a, { exact: !0, path: "/board", component: Yt }),
                    a.a.createElement(Bt.a, { exact: !0, path: "/board/:idBoard", component: xn })
                );
            };
            n(145);
            n.d(t, "history", function() {
                return Ln;
            });
            var gn,
                Ln = Object(u.a)({ basename: It.a }),
                wn = Object(m.a)(),
                _n = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || i.d,
                kn = Object(i.e)(K(Ln), _n(Object(i.a)(wn, Object(d.a)(Ln))));
            wn.run(
                ((gn = Dt),
                V.a.mark(function e() {
                    return V.a.wrap(function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), Object(X.a)([me(gn), Ie(gn), tt(gn), _t(gn)]);
                                case 2:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                }))
            ),
                o.a.render(
                    a.a.createElement(
                        s.a,
                        { store: kn },
                        a.a.createElement(l.a, { history: Ln }, a.a.createElement(Sn, null))
                    ),
                    document.getElementById("root")
                ),
                "serviceWorker" in navigator &&
                    navigator.serviceWorker.ready.then(function(e) {
                        e.unregister();
                    });
        },
        70: function(e) {
            e.exports = JSON.parse('{"a":"/trello/build/"}');
        },
        80: function(e, t, n) {
            e.exports = n(146);
        },
        92: function(e, t, n) {},
        93: function(e, t, n) {},
        94: function(e, t, n) {},
        95: function(e, t, n) {},
        97: function(e, t, n) {},
        98: function(e, t, n) {},
        99: function(e, t, n) {}
    },
    [[80, 1, 2]]
]);
//# sourceMappingURL=main.2afccc39.chunk.js.map
