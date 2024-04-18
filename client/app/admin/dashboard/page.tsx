import AdminDashboard from "@/app/admin-components/AdminDashboard"
import AdminHome from "@/app/admin-components/AdminHome"


function Dashboard() {
    return (
        <div>
            <AdminHome>
                <AdminDashboard />
            </AdminHome>
        </div>
    )
}

export default Dashboard
