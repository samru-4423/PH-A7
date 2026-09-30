import Stats from "@/components/Stats";

const StatsPage = () => {
    return (
        <div className="bg-gray-200">

            <div className="w-[90%] md:w-[85%] lg:w-[70%] mx-auto py-10 ">
                <h1 className="text-[30px] md:text-4xl font-bold mb-5">
                    Friendship Analytics
                </h1>
                <Stats />
            </div>
        </div>
    );
};

export default StatsPage;