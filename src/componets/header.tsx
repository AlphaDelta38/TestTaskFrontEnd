import React from 'react';
import cl from '../module/header.module.css'
const Header = () => {
    return (
        <div className={cl.Header}>
            <div className={cl.Header__container}>
                <div className={cl.Logo}>
                   <a href='products'> <img className="cursor-pointer" width='100px' height='100px' src='/Logo.png'/></a>
                </div>
                <div className={cl.Navigation}>
                    <div className={cl.Navigation__site}>
                        <div className={cl.Site__ButtonContainer}>
                            <button><a href='products'>products</a></button>
                            <button><a href='cart'>cart</a></button>
                        </div>
                    </div>
                    <div className={cl.Navigation__Aoutorization}>
                    <div className={cl.Auth__inputContainer}>
                            <input placeholder="email"/>
                            <input placeholder="password" />
                        </div>
                        <div className={cl.AuthButton}>
                            <button>Войти</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;