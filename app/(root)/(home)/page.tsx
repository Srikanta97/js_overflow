import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const mockHomeQuestions = [
  {
    _id: "1",
    title: "Async/await vs Promises vs RX_JS?",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "rxjs" },
      { _id: "3", name: "promises" },
      { _id: "4", name: "async" },
    ],
    author: { _id: "101", name: "Srikanta", picture: "url_to_picture" },
    upvotes: 10,
    views: 95,
    answers: [],
    createdAt: new Date("2024-03-01T21:04:00.000Z"),
  },
  {
    _id: "2",
    title: "App router vs Page router in NextJS",
    tags: [
      { _id: "1", name: "nextjs" },
      { _id: "2", name: "nextjsrouter" },
    ],
    author: { _id: "101", name: "Srikanta", picture: "url_to_picture" },
    upvotes: 25,
    views: 71,
    answers: [],
    createdAt: new Date("2024-02-27T17:19:12.000Z"),
  },
  {
    _id: "3",
    title: "Why are Arrow functions used almost everywhere?",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "arrowfunction" },
    ],
    author: { _id: "101", name: "Srikanta", picture: "url_to_picture" },
    upvotes: 4,
    views: 95,
    answers: [],
    createdAt: new Date("2023-11-20T03:45:30.000Z"),
  },
  {
    _id: "4",
    title: "Differentiate between real DOM and virtual DOM?",
    tags: [
      { _id: "1", name: "dom" },
      { _id: "2", name: "virtualdom" },
      { _id: "3", name: "react" },
    ],
    author: { _id: "101", name: "Srikanta", picture: "url_to_picture" },
    upvotes: 108,
    views: 20000,
    answers: [],
    createdAt: new Date("2024-03-05T12:08:57.000Z"),
  },
  {
    _id: "5",
    title: "How is React different from React Native?",
    tags: [
      { _id: "1", name: "react" },
      { _id: "2", name: "reactnative" },
    ],
    author: { _id: "101", name: "Srikanta", picture: "url_to_picture" },
    upvotes: 85,
    views: 1543,
    answers: [],
    createdAt: new Date("2023-09-22T19:37:24.000Z"),
  },
  {
    _id: "6",
    title: "What is Express js?",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "express" },
    ],
    author: { _id: "101", name: "Srikanta", picture: "url_to_picture" },
    upvotes: 76,
    views: 9053,
    answers: [],
    createdAt: new Date("2023-08-14T04:03:42.000Z"),
  },
  {
    _id: "7",
    title: "Configuring TypeScript with React",
    tags: [
      { _id: "1", name: "typescript" },
      { _id: "2", name: "react" },
    ],
    author: { _id: "101", name: "Srikanta", picture: "url_to_picture" },
    upvotes: 1252,
    views: 20458,
    answers: [],
    createdAt: new Date("2023-07-29T15:21:09.000Z"),
  },
  {
    _id: "8",
    title: "unknown, never and any types explained",
    tags: [
      { _id: "1", name: "typescript" },
      { _id: "2", name: "unknown" },
      { _id: "3", name: "never" },
      { _id: "4", name: "any" },
    ],
    author: { _id: "101", name: "Srikanta", picture: "url_to_picture" },
    upvotes: 88,
    views: 3041,
    answers: [],
    createdAt: new Date("2023-06-10T21:55:36.000Z"),
  },
  {
    _id: "9",
    title: "Optional chaining in TypeScript",
    tags: [
      { _id: "1", name: "typescript" },
      { _id: "2", name: "optionalchaining" },
    ],
    author: { _id: "101", name: "Srikanta", picture: "url_to_picture" },
    upvotes: 2,
    views: 57,
    answers: [],
    createdAt: new Date("2023-04-17T12:40:21.000Z"),
  },
  {
    _id: "10",
    title: "What is Server Side Rendering? Does NextJS make use of it?",
    tags: [
      { _id: "1", name: "serversiderendering" },
      { _id: "2", name: "ssr" },
      { _id: "3", name: "web" },
      { _id: "4", name: "nextjs" },
    ],
    author: { _id: "101", name: "Srikanta", picture: "url_to_picture" },
    upvotes: 523,
    views: 12768,
    answers: [],
    createdAt: new Date("2023-05-04T08:12:04.000Z"),
  },
  {
    _id: "11",
    title: "When should generators be used in ES6?",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "es6" },
      { _id: "3", name: "es2015" },
      { _id: "4", name: "generators" },
    ],
    author: { _id: "101", name: "Srikanta", picture: "url_to_picture" },
    upvotes: 23,
    views: 592,
    answers: [],
    createdAt: new Date("2024-01-12T11:44:13.000Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-8 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          customClass="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          customClass="min-h-[48px] sm:min-w-[170px]"
          containerClass="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-4">
        {mockHomeQuestions.length > 0 ? (
          mockHomeQuestions.map((question) => (
            <QuestionCard
              key={question._id}
              id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. Your query could be the next big thing others learn from.
        Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
