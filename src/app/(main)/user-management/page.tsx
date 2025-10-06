import client from "@/lib/fetch-client";
import UserManagementPage from "@/modules/user-management/UserManagementPage";

async function getInitialData(page: number, limit: number) {
  try {
    const data = await client.get(`api/v1/admin/users?page=${page}&limit=${limit}`)
    return data
  } catch (error) {
    return []
  }
}

const UserManagement = async () => {

  
  const  data  = await getInitialData(1, 10);
  return (
    <div className="flex justify-between">
      <UserManagementPage data={data} />
    </div>
  );
};

export default UserManagement;
