import { Stack, Typography } from "@mui/material";
import { usePage } from "@inertiajs/react";
import EmployeeShowLayout from "@/components/EmployeeShowLayout";
import Layout from "@/Layout/Layout";
import { ProfileCard } from "@/components/Cards/ProfileCard";
import { TabsCard } from "@/components/Cards/TabsCard";

const show = () => {
    const { employee } = usePage().props;

    return (
        <Layout>
            <EmployeeShowLayout title="Employee Details">
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="center" // Centers on small screens
                >
                    {/* Profile Card */}
                    <ProfileCard data={employee} />

                    {/* Tabs Card */}
                    <TabsCard data={employee} />
                </Stack>
            </EmployeeShowLayout>
        </Layout>
    );
};

export default show;
