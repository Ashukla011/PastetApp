import React, { useEffect, useState } from "react";
import { fetchPaste } from "../services/api";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();
  const [paste, setPaste] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPaste = async () => {
      try {
        const res = await fetchPaste(id);
        setPaste(res.data);
      } catch (err) {
        setError(err.response?.data?.error || "Paste not found");
      }
    };
    getPaste();
  }, [id]);

  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!paste) return <div>Loading...</div>;

  return (
   <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-10">
  <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 md:p-8">

    {/* Header */}
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        Paste Content
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Shared text content
      </p>
    </div>

    {/* Content */}
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 overflow-x-auto">
      <pre className="text-sm font-mono text-gray-800 whitespace-pre-wrap break-words">
        {paste.content}
      </pre>
    </div>

    {/* Metadata */}
    <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-gray-600">

      {paste.remaining_views !== null && (
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-700">Remaining views:</span>
          <span>{paste.remaining_views}</span>
        </div>
      )}

      {paste.expires_at && (
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-700">Expires at:</span>
          <span>
            {new Date(paste.expires_at).toLocaleString()}
          </span>
        </div>
      )}

    </div>

  </div>
</div>

  );
};

export default ViewPaste;
