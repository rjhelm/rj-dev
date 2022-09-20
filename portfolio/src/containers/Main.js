import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Home from '../pages/home/'
import Splash from '../pages/splash/'
import Education from '../pages/education/'
import Experience from '../pages/experience/'
import Contact from '../pages/contact/'
import Projects from '../pages/projects/'
import { settings } from '../portfolio.js'

export default function Main(propss) {
    if (settings.isSplash) {
        return (
            <div>
                <HashRouter basename="/">
                    <Routes>
                        <Route
                            path="/"
                            exact
                            render={(props) => (
                                <Splash
                                    {...props}
                                    theme={propss.theme}
                                    setTheme={propss.setTheme}
                                />
                            )}
                        />
                        <Route
                            path="/home"
                            render={(props) => (
                                <Home
                                    {...props}
                                    theme={propss.theme}
                                    setTheme={propss.setTheme}
                                />
                            )}
                        />
                        <Route
                            path="/experience"
                            exact
                            render={(props) => (
                                <Experience
                                    {...props}
                                    theme={propss.theme}
                                    setTheme={propss.setTheme}
                                />
                            )}
                        />
                        <Route
                            path="/education"
                            render={(props) => (
                                <Education
                                    {...props}
                                    theme={propss.theme}
                                    setTheme={propss.setTheme}
                                />
                            )}
                        />
                        <Route
                            path="/contact"
                            render={(props) => (
                                <Contact
                                    {...props}
                                    theme={propss.theme}
                                    setTheme={propss.setTheme}
                                />
                            )}
                        />
                        <Route
                            path="/splash"
                            render={(props) => (
                                <Splash
                                    {...props}
                                    theme={propss.theme}
                                    setTheme={propss.setTheme}
                                />
                            )}
                        />
                        <Route
                            path="/projects"
                            render={(props) => (
                                <Projects
                                    {...props}
                                    theme={propss.theme}
                                    setTheme={propss.setTheme}
                                />
                            )}
                        />
                    </Routes>
                </HashRouter>
            </div>
        );
    } else {
        return (
            <div>
                <HashRouter basename="/">
                    <Routes>
                        <Route
                            path="/"
                            exact
                            render={(props) => (
                                <Home
                                    {...props}
                                    theme={propss.theme}
                                    setTheme={propss.setTheme}
                                />
                            )}
                        />
                        <Route
                            path="/home"
                            render={(props) => (
                                <Home
                                    {...props}
                                    theme={propss.theme}
                                    setTheme={propss.setTheme}
                                />
                            )}
                        />
                        <Route
                            path="/experience"
                            exact
                            render={(props) => (
                                <Experience
                                    {...props}
                                    theme={propss.theme}
                                    setTheme={propss.setTheme}
                                />
                            )}
                        />
                        <Route
                            path="/education"
                            render={(props) => (
                                <Education
                                    {...props}
                                    theme={propss.theme}
                                    setTheme={propss.setTheme}
                                />
                            )}
                        />
                        <Route
                            path="/contact"
                            render={(props) => (
                                <Contact
                                    {...props}
                                    theme={propss.theme}
                                    setTheme={propss.setTheme}
                                />
                            )}
                        />
                        <Route
                            path="/projects"
                            render={(props) => (
                                <Projects
                                    {...props}
                                    theme={propss.theme}
                                    setTheme={propss.setTheme}
                                />
                            )}
                        />
                    </Routes>
                </HashRouter>
            </div>
        )
    }
}