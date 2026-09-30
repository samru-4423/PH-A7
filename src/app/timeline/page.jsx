import TimelineDetails from "@/components/TimelineDetails";

const TimelinePage = () => {
    return (
        <div className="bg-gray-200 py-10">
            <div className="w-[95%] md:w-[85%] lg:w-[70%] mx-auto">
                <h1 className="text-4xl font-semibold mb-5">Timeline</h1>
                <TimelineDetails></TimelineDetails>
            </div>
        </div>
    );
};

export default TimelinePage;