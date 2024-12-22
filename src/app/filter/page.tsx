import ImageEditor from '@/app/filter/components/ImageEditor';

const Filter = () => {
  return (
    <>
      <div className="flex cursor-pointer justify-center bg-gray-100 text-blue-500 underline">
        <a href="https://github.com/QuangQuy420/next-app-practice">
          Github Repository
        </a>
      </div>
      <ImageEditor />
    </>
  );
};

export default Filter;
