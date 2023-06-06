import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { Box } from "@mui/material";
import { AllOrder } from "./component/AllOrder";
import { EmptyOrder } from "./component/EmptyOrder";

export const OrderViewPage = () => {

    const data = [
        {
            label: "All Order",
            value: "All Order",
            render: <AllOrder />
        },
        {
            label: "To Pay",
            value: "To Pay",
            render: <EmptyOrder />

        },
        {
            label: "To Shift",
            value: "To Shift",
            render: <EmptyOrder />

        },
        {
            label: "To Receive",
            value: "To Receive",
            render: <EmptyOrder />

        },
    ]
    const [activeTab, setActiveTab] = React.useState("All Order");
    return (
        <Box className="2xl:px-20 md:px-6 px-4">
            <Tabs value={activeTab}>
                <TabsHeader
                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                    indicatorProps={{
                        className: "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
                    }}
                >
                    {data.map(({ label, value }) => (
                        <Tab
                            key={value}
                            defaultValue={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={activeTab === value ? "text-blue-500" : ""}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({ value, render }) => (
                        <TabPanel key={value} value={value}>
                            {render}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </Box>
    );
}