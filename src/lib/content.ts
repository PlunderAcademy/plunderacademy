import { createServerFn } from "@tanstack/react-start";

// Server functions exposing the bundled MDX content library.
// The mdx module is imported lazily inside handlers so gray-matter and the
// raw content glob stay out of the client bundle.

export const fetchArticles = createServerFn({ method: "GET" }).handler(
  async () => {
    const { getArticles } = await import("./mdx");
    return getArticles();
  }
);

export const fetchArticleBySlug = createServerFn({ method: "GET" })
  .inputValidator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const { getArticleBySlug } = await import("./mdx");
    return getArticleBySlug(slug);
  });

export const fetchGlossaries = createServerFn({ method: "GET" }).handler(
  async () => {
    const { getGlossaries } = await import("./mdx");
    return getGlossaries();
  }
);

export const fetchGlossaryBySlug = createServerFn({ method: "GET" })
  .inputValidator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const { getGlossaryBySlug } = await import("./mdx");
    return getGlossaryBySlug(slug);
  });

export const fetchIslands = createServerFn({ method: "GET" }).handler(
  async () => {
    const { getIslands } = await import("./mdx");
    return getIslands();
  }
);

export const fetchModules = createServerFn({ method: "GET" }).handler(
  async () => {
    const { getModules } = await import("./mdx");
    return getModules();
  }
);

export const fetchModuleContent = createServerFn({ method: "GET" })
  .inputValidator((moduleSlug: string) => moduleSlug)
  .handler(async ({ data: moduleSlug }) => {
    const { getModules, getMissionByModule, getQuizByModule, getLessonByIds } =
      await import("./mdx");

    const modules = await getModules();
    const module_ = modules.find((m) => m.slug === moduleSlug) ?? null;
    if (!module_) {
      return null;
    }

    const [mission, quiz, lessonContents] = await Promise.all([
      getMissionByModule(moduleSlug),
      getQuizByModule(moduleSlug),
      Promise.all(
        module_.lessons.map(async (lesson) => {
          try {
            const lessonData = await getLessonByIds(moduleSlug, lesson.slug);
            return { ...lesson, content: lessonData.content as string | null };
          } catch (error) {
            console.error(`Error loading lesson ${lesson.slug}:`, error);
            return { ...lesson, content: null };
          }
        })
      ),
    ]);

    return { module: module_, mission, quiz, lessonContents };
  });
