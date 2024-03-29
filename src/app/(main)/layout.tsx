import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

const MainLayout = async ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <div className="hidden md:flex flex-col h-full w-[4.5rem] z-30 fixed inset-y-0">
                <NavigationSidebar />
            </div>
            <main className="md:pl-[4.5rem] h-full">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;