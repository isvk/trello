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
                u = n(12),
                s = n(16),
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
            function v(e) {
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
            var O,
                j = { idMember: "", token: "", key: "" },
                x = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case b:
                            return v({}, e, { token: t.token });
                        case "LOGIN_BY_TOKEN_SUCCESS":
                            return v({}, e, { idMember: t.idMember });
                        default:
                            return e;
                    }
                },
                S = n(8),
                g = n(25),
                L = n(24),
                w = n(26),
                k = n(17),
                _ = "LOAD_BOARDS";
            !(function(e) {
                (e[(e.isNotLoaded = 0)] = "isNotLoaded"),
                    (e[(e.isLoading = 1)] = "isLoading"),
                    (e[(e.isLoaded = 2)] = "isLoaded"),
                    (e[(e.isError = 3)] = "isError");
            })(O || (O = {}));
            var C,
                D = { boardsLoadingState: O.isNotLoaded, collection: Object(k.a)([]) },
                I = (function(e) {
                    function t() {
                        return Object(S.a)(this, t), Object(g.a)(this, Object(L.a)(t).apply(this, arguments));
                    }
                    return Object(w.a)(t, e), t;
                })(Object(k.b)(D)),
                B = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new I(),
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "ADD_BOARDS":
                            return (
                                t.boards.forEach(function(t) {
                                    e = e.setIn(["collection", t.id], t);
                                }),
                                e.set("boardsLoadingState", O.isLoaded)
                            );
                        case "LOAD_BOARDS_ERROR":
                            return e.set("boardsLoadingState", O.isError);
                        case "SET_CARDS_LOADED":
                            return e.updateIn(["collection", t.id], function(e) {
                                return e && e.set("cardsLoadingState", O.isLoaded);
                            });
                        case "LOAD_CARDS_FOR_BOARD_ERROR":
                            return e.updateIn(["collection", t.id], function(e) {
                                return e && e.set("cardsLoadingState", O.isError);
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
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(k.a)([]),
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
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(k.a)([]),
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
                G = (function(e) {
                    function t() {
                        return Object(S.a)(this, t), Object(g.a)(this, Object(L.a)(t).apply(this, arguments));
                    }
                    return Object(w.a)(t, e), t;
                })(Object(k.b)(H)),
                Y = new G(),
                J = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "SET_ID_LIST":
                            return e.set("idList", t.idList);
                        case "SET_NAME":
                            return e.set("name", t.name);
                        case "DELETE_CREATE_CARD":
                            return Y;
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
                X = n.n(W),
                V = n(68),
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
                re = n(69),
                ae = function() {
                    document.location.href =
                        "https://trello.com/1/authorize?scope=write&expiration=1day&name=TestTrello&return_url=" +
                        window.location.origin +
                        re.a +
                        "%23/auth/save_token/&scope=read&response_type=token&key=57dec6bd85b077473d5258dd1f499f7b";
                },
                ce = function(e) {
                    return Object(ne.d)("/board/" + e);
                },
                oe = X.a.mark(de),
                ie = X.a.mark(le),
                ue = X.a.mark(me),
                se = X.a.mark(fe);
            function de() {
                return X.a.wrap(
                    function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.prev = 0), (e.next = 3), ae();
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
                    oe,
                    null,
                    [[0, 5]]
                );
            }
            function le(e, t) {
                var n;
                return X.a.wrap(
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
                    ie,
                    null,
                    [[0, 12]]
                );
            }
            function me(e, t) {
                return X.a.wrap(
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
                    ue,
                    null,
                    [[0, 14]]
                );
            }
            function fe(e) {
                return X.a.wrap(function(t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), Object($.e)(p, de);
                            case 2:
                                return (t.next = 4), Object($.e)(b, le, e);
                            case 4:
                                return (t.next = 6), Object($.e)(E, me, e);
                            case 6:
                            case "end":
                                return t.stop();
                        }
                }, se);
            }
            var pe = function() {
                    return { type: _ };
                },
                be = function() {
                    return { type: "LOAD_BOARDS_ERROR" };
                },
                Ee = function(e) {
                    return { type: "ADD_BOARDS", boards: e };
                },
                he = function(e) {
                    return { type: "SET_CARDS_LOADED", id: e };
                },
                ve = function(e) {
                    return { type: "LOAD_CARDS_FOR_BOARD_ERROR", id: e };
                },
                Oe = { id: "", name: "", cardsLoadingState: O.isNotLoaded },
                je = (function(e) {
                    function t() {
                        return Object(S.a)(this, t), Object(g.a)(this, Object(L.a)(t).apply(this, arguments));
                    }
                    return Object(w.a)(t, e), t;
                })(Object(k.b)(Oe)),
                xe = { id: "", idBoard: "", name: "", pos: 0, mode: C.viewing },
                Se = (function(e) {
                    function t() {
                        return Object(S.a)(this, t), Object(g.a)(this, Object(L.a)(t).apply(this, arguments));
                    }
                    return Object(w.a)(t, e), t;
                })(Object(k.b)(xe)),
                ge = function(e) {
                    return { type: "ADD_LISTS", lists: e };
                },
                Le = function(e) {
                    return { type: "UPDATE_LIST_SUCCESS", list: e };
                },
                we = function(e) {
                    return { type: "DELETE_LIST_SUCCESS", id: e };
                },
                ke = function() {
                    return { type: "SORT_BY_POSITION" };
                },
                _e = function(e, t, n, r) {
                    return { type: A, id: e, idBoard: t, newIndex: n, oldIndex: r };
                },
                Ce = X.a.mark(Ie),
                De = X.a.mark(Be);
            function Ie(e) {
                var t;
                return X.a.wrap(
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
                                            Ee(
                                                t.map(function(e) {
                                                    return new je(e);
                                                })
                                            )
                                        )
                                    );
                                case 6:
                                    return (
                                        (n.next = 8),
                                        Object($.c)(
                                            ge(
                                                t
                                                    .map(function(e) {
                                                        return e.lists;
                                                    })
                                                    .flat()
                                                    .map(function(e) {
                                                        return new Se(e);
                                                    })
                                            )
                                        )
                                    );
                                case 8:
                                    n.next = 14;
                                    break;
                                case 10:
                                    return (n.prev = 10), (n.t0 = n.catch(0)), (n.next = 14), Object($.c)(be());
                                case 14:
                                case "end":
                                    return n.stop();
                            }
                    },
                    Ce,
                    null,
                    [[0, 10]]
                );
            }
            function Be(e) {
                return X.a.wrap(function(t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), Object($.e)(_, Ie, e);
                            case 2:
                            case "end":
                                return t.stop();
                        }
                }, De);
            }
            var ye = n(18),
                Ne = function(e, t) {
                    return t;
                },
                Te = function(e) {
                    return e.auth;
                },
                Ae =
                    (Object(ye.a)(Te, function(e) {
                        return e.idMember;
                    }),
                    Object(ye.a)(Te, function(e) {
                        return e.token;
                    }),
                    Object(ye.a)(Te, function(e) {
                        return e.key;
                    }),
                    function(e) {
                        return e.boards;
                    }),
                Re = Object(ye.a)(Ae, function(e) {
                    return e.boardsLoadingState;
                }),
                Pe = Object(ye.a)(Ae, function(e) {
                    return e.collection;
                }),
                Me = Object(ye.a)(Pe, Ne, function(e, t) {
                    return e.get(t);
                }),
                Fe = function(e) {
                    return e.lists;
                },
                Ue = Object(ye.a)(Fe, Ne, function(e, t) {
                    return e.filter(function(e) {
                        return e.idBoard === t;
                    });
                }),
                ze = Object(ye.a)(Fe, Ne, function(e, t) {
                    return e.find(function(e) {
                        return e.id === t;
                    });
                }),
                qe = function(e) {
                    return e.cards;
                },
                He = Object(ye.a)(qe, Ne, function(e, t) {
                    return e.filter(function(e) {
                        return e.idList === t;
                    });
                }),
                Ge = Object(ye.a)(qe, Ne, function(e, t) {
                    return e.find(function(e) {
                        return e.id === t;
                    });
                }),
                Ye = function(e) {
                    return e.createCard;
                },
                Je = Object(ye.a)(Ye, function(e) {
                    return e.idList;
                }),
                Ke =
                    (Object(ye.a)(Ye, function(e) {
                        return e.name;
                    }),
                    X.a.mark(Qe)),
                We = X.a.mark(Ze),
                Xe = X.a.mark(et),
                Ve = X.a.mark(tt),
                $e = X.a.mark(nt);
            function Qe(e, t) {
                var n;
                return X.a.wrap(
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
                                    return (n = r.sent), (r.next = 6), Object($.c)(ge([new Se(n)]));
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
                    Ke,
                    null,
                    [[0, 8]]
                );
            }
            function Ze(e, t) {
                var n;
                return X.a.wrap(
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
                                    return (n = r.sent), (r.next = 6), Object($.c)(Le(new Se(n)));
                                case 6:
                                    return (r.next = 8), Object($.c)(ke());
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
                    We,
                    null,
                    [[0, 10]]
                );
            }
            function et(e, t) {
                return X.a.wrap(
                    function(n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (n.prev = 0), (n.next = 3), Object($.b)(e.container.ApiList.delete, t.id);
                                case 3:
                                    return (n.next = 5), Object($.c)(we(t.id));
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
                    Xe,
                    null,
                    [[0, 7]]
                );
            }
            function tt(e, t) {
                var n, r, a, c, o, i, u, s;
                return X.a.wrap(
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
                                        Object($.d)(ze, t.id)
                                    );
                                case 4:
                                    if ((r = d.sent)) {
                                        d.next = 7;
                                        break;
                                    }
                                    throw new Error("Error not found list");
                                case 7:
                                    return (d.next = 9), Object($.d)(Ue, t.idBoard);
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
                                              (u = n(a, t.newIndex + o)),
                                              (c = (i + u) / 2)),
                                        (r = r.merge({ pos: c })),
                                        (d.next = 15),
                                        Object($.c)(ge([r]))
                                    );
                                case 15:
                                    return (d.next = 17), Object($.c)(ke());
                                case 17:
                                    return (d.next = 19), Object($.b)(e.container.ApiList.update, t.id, r.toJS());
                                case 19:
                                    if (((s = d.sent), r.pos === s.pos)) {
                                        d.next = 23;
                                        break;
                                    }
                                    return (d.next = 23), Object($.c)(pe());
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
            function nt(e) {
                return X.a.wrap(function(t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), Object($.e)(y, Qe, e);
                            case 2:
                                return (t.next = 4), Object($.e)(N, Ze, e);
                            case 4:
                                return (t.next = 6), Object($.e)(T, et, e);
                            case 6:
                                return (t.next = 8), Object($.e)(A, tt, e);
                            case 8:
                            case "end":
                                return t.stop();
                        }
                }, $e);
            }
            var rt = function(e) {
                    return { type: "ADD_CARDS", cards: e };
                },
                at = function(e) {
                    return { type: P, idBoard: e };
                },
                ct = function(e, t) {
                    return { type: M, idList: e, name: t };
                },
                ot = function(e, t) {
                    return { type: "SET_MODE", id: e, mode: t };
                },
                it = function(e, t) {
                    return { type: F, id: e, card: t };
                },
                ut = function(e) {
                    return { type: "UPDATE_CARD_SUCCESS", card: e };
                },
                st = function(e) {
                    return { type: U, id: e };
                },
                dt = function(e) {
                    return { type: "DELETE_CARD_SUCCESS", id: e };
                },
                lt = function() {
                    return { type: "SORT_BY_POSITION" };
                },
                mt = function(e, t, n, r, a) {
                    return { type: z, id: e, idList: t, idBoard: n, newIndex: r, oldIndex: a };
                },
                ft = function(e) {
                    return { type: "SET_NAME", name: e };
                },
                pt = function(e) {
                    return { type: "SET_ID_LIST", idList: e };
                },
                bt = function() {
                    return { type: "DELETE_CREATE_CARD" };
                },
                Et = X.a.mark(St),
                ht = X.a.mark(gt),
                vt = X.a.mark(Lt),
                Ot = X.a.mark(wt),
                jt = X.a.mark(kt),
                xt = X.a.mark(_t);
            function St(e, t) {
                var n;
                return X.a.wrap(
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
                                            rt(
                                                n.map(function(e) {
                                                    return new G(e);
                                                })
                                            )
                                        )
                                    );
                                case 6:
                                    return (r.next = 8), Object($.c)(lt());
                                case 8:
                                    return (r.next = 10), Object($.c)(he(t.idBoard));
                                case 10:
                                    r.next = 16;
                                    break;
                                case 12:
                                    return (
                                        (r.prev = 12), (r.t0 = r.catch(0)), (r.next = 16), Object($.c)(ve(t.idBoard))
                                    );
                                case 16:
                                case "end":
                                    return r.stop();
                            }
                    },
                    Et,
                    null,
                    [[0, 12]]
                );
            }
            function gt(e, t) {
                var n;
                return X.a.wrap(
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
                                    return (n = r.sent), (r.next = 6), Object($.c)(rt([new G(n)]));
                                case 6:
                                    return (r.next = 8), Object($.c)(bt());
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
                var n;
                return X.a.wrap(
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
                                    return (n = r.sent), (r.next = 6), Object($.c)(ut(new G(n)));
                                case 6:
                                    return (r.next = 8), Object($.c)(lt());
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
                    vt,
                    null,
                    [[0, 10]]
                );
            }
            function wt(e, t) {
                return X.a.wrap(
                    function(n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (n.prev = 0), (n.next = 3), Object($.b)(e.container.ApiCard.delete, t.id);
                                case 3:
                                    return (n.next = 5), Object($.c)(dt(t.id));
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
            function kt(e, t) {
                var n, r, a, c, o, i, u, s, d;
                return X.a.wrap(
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
                                        Object($.d)(Ge, t.id)
                                    );
                                case 4:
                                    if ((r = l.sent)) {
                                        l.next = 7;
                                        break;
                                    }
                                    throw new Error("Error not found card");
                                case 7:
                                    return (l.next = 9), Object($.d)(He, t.idList);
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
                                              (u = n(a, t.newIndex - 1 + i)),
                                              (s = n(a, t.newIndex + i)),
                                              (c = (u + s) / 2)),
                                        (r = r.merge({ idList: t.idList, pos: c })),
                                        (l.next = 17),
                                        Object($.c)(rt([r]))
                                    );
                                case 17:
                                    return (l.next = 19), Object($.c)(lt());
                                case 19:
                                    return (l.next = 21), Object($.b)(e.container.ApiCard.update, t.id, r.toJS());
                                case 21:
                                    if (((d = l.sent), r.pos === d.pos)) {
                                        l.next = 25;
                                        break;
                                    }
                                    return (l.next = 25), Object($.c)(at(t.idBoard));
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
                    jt,
                    null,
                    [[0, 27]]
                );
            }
            function _t(e) {
                return X.a.wrap(function(t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), Object($.e)(P, St, e);
                            case 2:
                                return (t.next = 4), Object($.e)(M, gt, e);
                            case 4:
                                return (t.next = 6), Object($.e)(F, Lt, e);
                            case 6:
                                return (t.next = 8), Object($.e)(U, wt, e);
                            case 8:
                                return (t.next = 10), Object($.e)(z, kt, e);
                            case 10:
                            case "end":
                                return t.stop();
                        }
                }, xt);
            }
            var Ct = n(70),
                Dt = new (n.n(Ct).a)(),
                It = Dt;
            Dt.service("Http", function e() {
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
                            n.key || (n.key = "57dec6bd85b077473d5258dd1f499f7b");
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
                Dt.service(
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
                Dt.service(
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
                Dt.service(
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
                Dt.service(
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
            var Bt = n(10),
                yt = n(34);
            n(92);
            function Nt() {
                return Object(u.d)();
            }
            function Tt() {
                var e = Nt();
                return a.a.createElement(
                    "button",
                    {
                        className: "btn-auth",
                        onClick: function() {
                            return e(Q());
                        }
                    },
                    "\u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430"
                );
            }
            function At() {
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
                                        {
                                            href: "https://trello.com/login",
                                            target: "_blank",
                                            rel: "noopener noreferrer"
                                        },
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
                                a.a.createElement(Tt, null)
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
            function Rt() {
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
            function Pt() {
                var e = Nt(),
                    t = Object(Bt.f)().pathname.match(/^.*token=(.*)/),
                    n = t ? t[1] : "";
                return (
                    Object(r.useEffect)(
                        function() {
                            e(Z(n));
                        },
                        [e, n]
                    ),
                    a.a.createElement(Rt, null)
                );
            }
            function Mt(e, t) {
                return Object(u.e)(function(n) {
                    return e(n, t);
                });
            }
            function Ft() {
                var e = Nt(),
                    t = Mt(Ae);
                switch (
                    (Object(r.useEffect)(
                        function() {
                            e(pe());
                        },
                        [e]
                    ),
                    t.boardsLoadingState)
                ) {
                    case O.isNotLoaded:
                    case O.isLoading:
                        return a.a.createElement(Rt, null);
                    case O.isError:
                        return a.a.createElement("h1", null, "Error loading boards");
                }
                return a.a.createElement(a.a.Fragment, null);
            }
            var Ut = n(153),
                zt = n(152);
            n(94), n(95);
            function qt() {
                var e = Nt(),
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
                            yt.b,
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
                                            yt.b,
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
            function Gt() {
                var e = Mt(Ae);
                return e.boardsLoadingState === O.isNotLoaded
                    ? a.a.createElement(Ft, null)
                    : a.a.createElement(Ht, { boards: e });
            }
            function Yt(e) {
                var t = Nt();
                switch (
                    (Object(r.useEffect)(
                        function() {
                            t(at(e.board.id));
                        },
                        [e.board, t]
                    ),
                    e.board.cardsLoadingState)
                ) {
                    case O.isNotLoaded:
                    case O.isLoading:
                        return a.a.createElement(Rt, null);
                    case O.isError:
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
            function Xt(e) {
                var t = Nt();
                return a.a.createElement(Wt, {
                    handleSetModeEditing: function() {
                        return t(ot(e.idCard, C.editing));
                    }
                });
            }
            var Vt = n(42);
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
                var t = Nt(),
                    n = Object(r.useState)(),
                    c = Object(Vt.a)(n, 2),
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
                        a.a.createElement(Xt, { idCard: e.card.id }),
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
                var t = Nt();
                return a.a.createElement(an, {
                    handleShowCreateCardForm: function() {
                        t(pt(e.idList));
                    }
                });
            }
            var on = n(156);
            n(102);
            function un(e) {
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
            function sn(e) {
                var t = Nt(),
                    n = Object(r.useState)(e.card),
                    c = Object(Vt.a)(n, 2),
                    o = c[0],
                    i = c[1];
                return a.a.createElement(un, {
                    name: o.name,
                    handleChangeName: function(t) {
                        return i(e.card.set("name", t));
                    },
                    handleButtonClose: function() {
                        return t(ot(e.card.id, C.viewing));
                    },
                    handleButtonSave: function() {
                        return t(it(o.id, o));
                    },
                    typeSave: "update"
                });
            }
            function dn() {
                var e = Nt(),
                    t = Mt(Ye);
                return a.a.createElement(un, {
                    name: t.name,
                    handleChangeName: function(t) {
                        return e(ft(t));
                    },
                    handleButtonClose: function() {
                        return e(bt());
                    },
                    handleButtonSave: function() {
                        return e(ct(t.idList, t.name));
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
                                ? a.a.createElement(sn, { key: e.id, card: e })
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
                var t = Mt(Je);
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
                var t = Mt(He, e.list.id);
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
                var t = Mt(Ue, e.idBoard),
                    n = Nt();
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
                                  mt(
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
            function vn(e) {
                var t = Object(u.d)(),
                    n = Mt(Ae);
                return a.a.createElement(hn, {
                    boards: n,
                    idBoard: e.idBoard,
                    handleRedirectToBoard: function(e) {
                        t(ce(e));
                    }
                });
            }
            n(141);
            function On(e) {
                return a.a.createElement(
                    "div",
                    { className: "navBar" },
                    a.a.createElement(vn, { idBoard: e.idBoard }),
                    a.a.createElement(qt, null)
                );
            }
            n(142);
            function jn(e) {
                return a.a.createElement(
                    "div",
                    { className: "board" },
                    a.a.createElement(On, { idBoard: e.idBoard }),
                    a.a.createElement(En, { idBoard: e.idBoard })
                );
            }
            function xn() {
                var e = Object(Bt.g)().idBoard,
                    t = Mt(Re),
                    n = Mt(Me, e);
                return t === O.isNotLoaded
                    ? a.a.createElement(Ft, null)
                    : n
                    ? n.cardsLoadingState === O.isNotLoaded
                        ? a.a.createElement(Yt, { board: n })
                        : a.a.createElement(jn, { idBoard: n.id })
                    : a.a.createElement("h1", null, "404");
            }
            n(143), n(144);
            var Sn = function() {
                return a.a.createElement(
                    Bt.c,
                    null,
                    a.a.createElement(
                        yt.a,
                        null,
                        a.a.createElement(Bt.a, { exact: !0, path: "/", component: At }),
                        a.a.createElement(Bt.a, { exact: !0, path: "/board", component: Gt }),
                        a.a.createElement(Bt.a, { exact: !0, path: "/board/:idBoard", component: xn }),
                        a.a.createElement(Bt.a, { path: "/auth/save_token", component: Pt })
                    )
                );
            };
            n(145);
            n.d(t, "history", function() {
                return Ln;
            });
            var gn,
                Ln = Object(s.b)(),
                wn = Object(m.a)(),
                kn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || i.d,
                _n = Object(i.e)(K(Ln), kn(Object(i.a)(wn, Object(d.a)(Ln))));
            wn.run(
                ((gn = It),
                X.a.mark(function e() {
                    return X.a.wrap(function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), Object(V.a)([fe(gn), Be(gn), nt(gn), _t(gn)]);
                                case 2:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                }))
            ),
                o.a.render(
                    a.a.createElement(
                        u.a,
                        { store: _n },
                        a.a.createElement(l.a, { history: Ln }, a.a.createElement(Sn, null))
                    ),
                    document.getElementById("root")
                ),
                "serviceWorker" in navigator &&
                    navigator.serviceWorker.ready.then(function(e) {
                        e.unregister();
                    });
        },
        69: function(e) {
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
//# sourceMappingURL=main.4da3bce6.chunk.js.map
