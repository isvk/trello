import React from "react";
import "./MainPage.scss";
import Auth from "src/components/Auth/Auth";

export default function MainPage() {
    return (
        <div className="mainPage">
            <div className="formLogin">
                <h1 className="title">Trello Test Task</h1>
                <ol>
                    <li>
                        <p>
                            Авторизуйтесь на{" "}
                            <a href="https://trello.com/login" target="_blank">
                                trello.com
                            </a>{" "}
                            под тестовым аккаунтом
                        </p>
                        <p>
                            Логин: <strong>test-of-war@yandex.ru</strong>
                        </p>
                        <p>Пароль: Test123456</p>
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
