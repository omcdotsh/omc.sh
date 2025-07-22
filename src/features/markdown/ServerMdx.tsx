import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Suspense } from "react";

import { rehypePlugins, remarkPlugins } from "./markdown.config";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

type ServerMdxProps = {
  source: string;
  className?: string;
};

const MdxComponent = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  a: (props: any) => {
    return (
      <a
        {...props}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:underline italic"
      />
    );
  },
} satisfies Record<string, React.ComponentType>;

const RenderMdx = (props: ServerMdxProps) => {
  return (
    <MDXRemote
      source={props.source}
      components={MdxComponent}
      options={{
        mdxOptions: {
          remarkPlugins: remarkPlugins,
          rehypePlugins: rehypePlugins,
          format: "mdx",
        },
      }}
    />
  );
};

export const ServerMdx = (props: ServerMdxProps) => {
  return (
    <div className={cn("prose dark:prose-invert", props.className)}>
      <Suspense fallback={<Spinner size="lg" />}>
        <RenderMdx {...props} />
      </Suspense>
    </div>
  );
};
