import React from "react";
import "./MainPage.scss";
import Auth from "src/components/Auth/Auth";

export default function MainPage() {
    return (
        <div className="mainPage">
            <div className="formLogin">
                <h1 className="title">Клиент для Trello API</h1>
                <div>
                    Внимание!!! В этом клиенте есть функции удаление и изменение карточек,
                    <br />
                    что бы не рисковать своими рабочими досками, воспользуйтесь тестовым аккаунтом.
                </div>
                <ol>
                    <li>
                        <p>
                            Авторизуйтесь на{" "}
                            <a href="https://trello.com/login" target="_blank" rel="noopener noreferrer">
                                trello.com
                            </a>{" "}
                            под тестовым аккаунтом
                        </p>
                        <p>
                            Логин: <strong>test-of-war@yandex.ru</strong>
                        </p>
                        <p>
                            Пароль: <strong>Test1234567</strong>
                        </p>
                    </li>
                    <li>
                        После авторизации перейдите для <Auth />
                    </li>
                    <li>На открывшейся странице нажмите "Разрешить"</li>
                </ol>
            </div>
        </div>
    );
}
