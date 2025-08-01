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
                {/* <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="center" // Centers on small screens
                >
                    <ProfileCard data={employee} />


                    <TabsCard data={employee} />
                </Stack> */}
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={2}
                    justifyContent="center"
                >
                    <ProfileCard data={employee} />
                    <TabsCard data={employee} />
                </Stack>
            </EmployeeShowLayout>
        </Layout>
    );
};

export default show;
