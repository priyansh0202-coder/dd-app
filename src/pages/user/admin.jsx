import React from 'react';
import Dashboard from '../../components/admin/dashboard';
import Sidebar from '../../components/admin/sidebar';
import { Helmet } from "react-helmet";

const Admin = () => {
    return (
        <div className="flex">
            <Helmet>
                <title>Admin | Mera Bestie</title>
            </Helmet>
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <div className="flex-1">
                    <Dashboard />
                </div>
            </div>
        </div>
    );
};

export default Admin;
