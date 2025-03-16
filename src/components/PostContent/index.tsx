import {
  PostContentContainer,
  // MarkdownParagraph,
  MarkdownUL,
  MarkdownOL,
  MarkdownPre,
  MarkdownH3,
  MarkdownH2,
  MarkdownH1,
  MarkdownHr,
} from "./styles";
import ReactMarkdown from "react-markdown";

export function PostContent({ markdown }: { markdown: string }) {
  return (
    <section>
      <PostContentContainer>
        <ReactMarkdown
          children={markdown}
          components={{
            // p: MarkdownParagraph,
            ul: MarkdownUL,
            ol: MarkdownOL,
            pre: MarkdownPre,
            h3: MarkdownH3,
            h2: MarkdownH2,
            h1: MarkdownH1,
            hr: MarkdownHr,
          }}
        />
      </PostContentContainer>
    </section>
  );
}
