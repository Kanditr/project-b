export default function CodeOutput({ code }: { code: string }) {
    return (
      <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm">
        <code>{code}</code>
      </pre>
    )
  }