import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { LOGIN, REGISTER, CHANGEPASSWORD } from '../../utils';

// Lazy-loaded components
const QuestionList = React.lazy(() => import('../../pages/QuestionList/QuestionList'));
const Question = React.lazy(() => import('../../pages/Question/Question'));
const LeaderBoard = React.lazy(() => import('../../pages/LeaderBoard/LeaderBoard'));
const Codes = React.lazy(() => import('../../pages/Codes/Codes'));
const NotFound = React.lazy(() => import('../../pages/NotFound/NotFound'));
const DashBoard = React.lazy(() => import('../../pages/DashBoard/DashBoard'));
const Account = React.lazy(() => import('../../pages/Account/Account'));
const LinkShortner = React.lazy(() => import('../../pages/LinkShortner/LinkShortner'));
const Notes = React.lazy(() => import('../../pages/Notes/Notes'));
const ServerLogs = React.lazy(() => import('../../pages/ServerLogs/ServerLogs'));
const CustomForm = React.lazy(() => import('../Customform/Customform'));

// Route paths (constants)
const ROUTES = {
    HOME: '/',
    QUESTIONS: '/questions',
    QUESTION: '/questions/:id',
    LEADERBOARD: '/leaderboard',
    CODES: '/codes/:id',
    LOGIN: '/login',
    REGISTER: '/register',
    CHANGE_PASSWORD: '/changePassword',
    DASHBOARD: '/dashboard',
    ACCOUNT: '/account',
    NOTES: '/notes',
    LINK_SHORTENER: '/linkShortner',
    SERVER_LOGS: '/serverLogs',
    NOT_FOUND: '*',
};

const NavigationStack = () => {
    const { loggedIn } = useSelector(state => state.auth);

    return (
        <main style={{ marginTop: '5rem' }}>
            <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
                <Routes>
                    {/* Redirect Root to Questions */}
                    <Route path={ROUTES.HOME} element={<Navigate replace to={ROUTES.QUESTIONS} />} />

                    {/* Public Routes */}
                    <Route path={ROUTES.QUESTIONS} element={<QuestionList />} />
                    <Route path={ROUTES.QUESTION} element={<Question />} />
                    <Route path={ROUTES.LEADERBOARD} element={<LeaderBoard />} />

                    {/* Auth Routes */}
                    <Route
                        path={ROUTES.LOGIN}
                        element={!loggedIn ? <CustomForm pageType={LOGIN} /> : <Navigate replace to={ROUTES.QUESTIONS} />}
                    />
                    <Route
                        path={ROUTES.REGISTER}
                        element={!loggedIn ? <CustomForm pageType={REGISTER} /> : <Navigate replace to={ROUTES.QUESTIONS} />}
                    />
                    <Route
                        path={ROUTES.CHANGE_PASSWORD}
                        element={loggedIn ? <CustomForm pageType={CHANGEPASSWORD} /> : <Navigate replace to={ROUTES.LOGIN} />}
                    />

                    {/* Protected Routes */}
                    <Route
                        path={ROUTES.DASHBOARD}
                        element={loggedIn ? <DashBoard /> : <Navigate replace to={ROUTES.LOGIN} />}
                    />
                    <Route path={ROUTES.ACCOUNT} element={loggedIn ? <Account /> : <Navigate replace to={ROUTES.LOGIN} />} />

                    {/* Additional Features */}
                    <Route path={ROUTES.CODES} element={<Codes />} />
                    <Route path={ROUTES.NOTES} element={<Notes />} />
                    <Route path={ROUTES.LINK_SHORTENER} element={<LinkShortner />} />
                    <Route path={ROUTES.SERVER_LOGS} element={<ServerLogs />} />

                    {/* Fallback Route */}
                    <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
                </Routes>
            </Suspense>
        </main>
    );
};

export default NavigationStack;
