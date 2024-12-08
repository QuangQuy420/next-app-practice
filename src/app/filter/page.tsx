import ImageEditor from "@@/components/FilterPage/ImageEditor";

const Filter = () => {
    return (
        <>
            <div className="flex justify-center bg-gray-100 text-blue-500 underline cursor-pointer">
                <a href="https://github.com/QuangQuy420/next-app-practice">Github Repository</a>
            </div>
            <ImageEditor />
        </>
    )
}

export default Filter;