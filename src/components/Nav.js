import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import styles from './Nav.module.css';

const Nav = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
      <div>
        <section>
          <nav>
            <div className={styles.nav}>
              <h1>
                Keycloak React AUTH.
              </h1>
              <ul>
                <li>
                  <a href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/user">
                    User
                  </a>
                </li>
              </ul>
              <div>
                <div className="hover:text-gray-200">
                  {!keycloak.authenticated && (
                    <button
                      type="button"
                      className="text-blue-800"
                      onClick={() => keycloak.login()}
                    >
                      Login
                    </button>
                  )}

                  {!!keycloak.authenticated && (
                    <button
                      type="button"
                      className="text-blue-800"
                      onClick={() => keycloak.logout()}
                    >
                      Logout ({keycloak.tokenParsed.preferred_username})
                    </button>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </section>
      </div>
  );
};

export default Nav;