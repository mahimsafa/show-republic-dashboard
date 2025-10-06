import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import AxiosCall from "@/utils/axios";
import { useRouter } from "next/navigation";
import Message from "@/components/Message/Message";
import { DashboardStats } from "./types";


const useStatsModel = () => {
    const [isFetchingStats, setIsFetchingStats] = useState(false)
    const [stats, setStats] = useState<DashboardStats>()

    const router = useRouter()

    const fetchStats = async () => {
        try {
            setIsFetchingStats(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/admin/reporting/dashboard/stats"
            });

            setIsFetchingStats(false)
            if (res.error == false) {
                setStats(res.data)
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsFetchingStats(false)
            Message.error(err?.response.data.message)
        }
    }


    return {
        fetchStats,
        isFetchingStats,
        stats
    }
}

export default useStatsModel
