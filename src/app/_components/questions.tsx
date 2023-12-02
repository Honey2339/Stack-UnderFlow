import { api } from "~/trpc/react";

export default function Questions() {
  const result = api.post.showQuestions.useQuery();
  if (result.error) {
    return <div>Error loading questions</div>;
  }

  if (result.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {result.data?.map((question) => (
        <div>
          <div className="ml-5 h-[0.5px] w-auto bg-gray-400"></div>
          <div className="mb-4 mt-3 flex items-center space-x-2 px-16">
            <div className="text-right">
              <div className="item-center flex space-x-2 text-sm">
                <p>{question.votes}</p>
                <p className="">Votes</p>
              </div>
              <div className="item-center flex space-x-2 text-sm">
                <p>{question.answers}</p>
                <p className="">Answers</p>
              </div>
              <div className="item-center flex space-x-2 text-sm">
                <p>{question.views}</p>
                <p className="">Views</p>
              </div>
            </div>
            <h3 className="mt-2 max-w-lg text-blue-500 transition duration-0 hover:cursor-pointer hover:text-blue-700">
              {question.question}
              <h3 className="min-w-[550px] text-right text-black">
                Asked By : {question.createdBy.name}
              </h3>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
