import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkToc from "remark-toc";
import remarkRehype from "remark-rehype";

function ChatBot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take upto 10 seconds");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_API_FIXNEXUS_KEY
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <>
      <div className="py-20 space-y-4 px-4">
        <form
          onSubmit={generateAnswer}
          className="w-full max-w-4xl m-auto text-center rounded bg-gray-50 dark:bg-slate-800 py-4">
          <h1 className="text-3xl text-center">Chat Bot</h1>

          <textarea
            required
            className="border rounded w-11/12 my-2 min-h-fit p-3 dark:bg-slate-500 dark:text-white placeholder:dark:text-white"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything"></textarea>

          <button
            type="submit"
            disabled={generatingAnswer}
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold bg-orange-400 dark:bg-transparent rounded-md shadow-2xl group">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            <span className="relative">Generate answer</span>
          </button>
        </form>
        <div className="w-full max-w-4xl m-auto text-center rounded shadow-xl dark:drop-shadow-2xl my-3 dark:bg-slate-800 bg-gray-50 dark:text-slate-300">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
            remarkPlugins={[remarkRehype, remarkGfm, remarkToc]}
            components={{
              table: (props) => (
                <table
                  {...props}
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    borderSpacing: "0",
                    border: "1px solid #e2e8f0",
                  }}
                />
              ),
              th: (props) => (
                <th
                  {...props}
                  style={{
                    textAlign: "left",
                    fontWeight: "bold",
                    padding: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                />
              ),
              tr: (props) => (
                <tr
                  {...props}
                  style={{
                    border: "1px solid #e2e8f0",
                  }}
                />
              ),
              td: (props) => (
                <td
                  {...props}
                  style={{
                    textAlign: "left",
                    padding: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                />
              ),
            }}
            className="py-5 px-6 space-y-6 text-justify overflow-auto ">
            {answer}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default ChatBot;
