import Head from "next/head";
import Header from "../components/Header";
import Tags from "../components/Tags";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getPromotions } from "../redux/entity/entity.slice";
import { getTags } from "../redux/tag/tag.slice";

export default function Home() {
  const tempTags = [
    { image: "/images/search.svg", title: "Burger King" },
    { image: "/images/search.svg", title: "Trendyol" },
    { image: "/images/search.svg", title: "Morhipo" },
    { image: "/images/search.svg", title: "ata" },
    { image: "/images/search.svg", title: "kaan" },
  ];

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (dispatch) {
      dispatch(getPromotions());
      dispatch(getTags());
    }
  }, []);

  const { promotions } = useAppSelector((state) => state.promotion);
  const { tags } = useAppSelector((state) => state.tags);

  return (
    <>
      <Head>
        <title>DAHA DAHA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-wrapper">
        <div className="content-wrapper">
          <Header />
          <Tags tags={tags} />
          <Cards cards={promotions} />
          <Footer />
        </div>
      </div>
    </>
  );
}
