import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const mockQuestions = [
  {
    _id: "1",
    title: "How is Next JS different from React?",
  },
  {
    _id: "2",
    title: "Explain JS prototypes",
  },
  {
    _id: "3",
    title: "What is Server Side Rendering?",
  },
  {
    _id: "4",
    title: "How is routing handled in Next JS?",
  },
  {
    _id: "5",
    title: "Which is more popular, Angular or React?",
  },
];

const mockPopularTags = [
  { _id: "1", name: "javascript", totalQuestions: 4 },
  { _id: "2", name: "next", totalQuestions: 7 },
  { _id: "3", name: "css", totalQuestions: 4 },
  { _id: "4", name: "react", totalQuestions: 4 },
  { _id: "5", name: "typescript", totalQuestions: 5 },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[20px]">
          {mockQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-6"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                height={20}
                width={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-wrap gap-3">
          {mockPopularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              id={tag._id}
              name={tag.name}
              count={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
