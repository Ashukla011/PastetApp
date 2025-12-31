import React, { useState } from "react";
import { createPaste } from "../services/api";

const CreatePaste = () => {
  const [content, setContent] = useState("");
  const [ttl, setTtl] = useState("");
  const [maxViews, setMaxViews] = useState("");
  const [pasteUrl, setPasteUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setPasteUrl("");

    if (!content.trim()) {
      setError("Content is required");
      return;
    }

    try {
      const data = {
        content,
        ttl_seconds: ttl ? parseInt(ttl) : undefined,
        max_views: maxViews ? parseInt(maxViews) : undefined,
      };
      const res = await createPaste(data);
      setPasteUrl(res.data.url);
    } catch (err) {
      setError(err.response?.data?.error || "Server error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
  <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 md:p-8">
    
    {/* Header */}
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        Create a Paste
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Share text securely with optional expiry and view limits
      </p>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-5">
      
      {/* Content */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Paste Content
        </label>
        <textarea
          className="w-full min-h-[160px] resize-y rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write or paste your content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>

      {/* TTL & Views */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Time to Live (seconds)
          </label>
          <input
            type="number"
            min="1"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Optional"
            value={ttl}
            onChange={(e) => setTtl(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Max Views
          </label>
          <input
            type="number"
            min="1"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Optional"
            value={maxViews}
            onChange={(e) => setMaxViews(e.target.value)}
          />
        </div>

      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition"
      >
        Create Paste
      </button>
    </form>

    {/* Result */}
    {pasteUrl && (
      <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4">
        <p className="text-sm font-medium text-green-700 mb-1">
          Paste created successfully
        </p>
        <a
          href={pasteUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-blue-600 underline break-all"
        >
          {pasteUrl}
        </a>
      </div>
    )}

    {/* Error */}
    {error && (
      <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
        {error}
      </div>
    )}

  </div>
</div>

  );
};

export default CreatePaste;
