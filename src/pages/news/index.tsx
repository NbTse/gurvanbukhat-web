import Banner from "components/common/banner";
import NewsList from "components/news/news-list";
import ResearchList from "components/news/research-list";

export default function News() {
  return (
    <>
      <Banner name="Судалгаа, Мэдээлэл" />

      <div className="mx-auto max-w-8xl">
        <div className="relative">
          <ResearchList />
          <NewsList />
        </div>
      </div>
    </>
  );
}
