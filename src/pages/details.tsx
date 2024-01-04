import Head from "next/head";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getPromotion } from "../redux/entity/entity.slice";

export default function Details() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (dispatch && router.query.id !== undefined) {
      dispatch(getPromotion(router.query.id));
    }
  }, [router.query.id]);

  const { promotion } = useAppSelector((state) => state.promotion);

  return (
    <>
      <Head>
        <title>Promosyon Detayları</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-wrapper">
        <div className="content-wrapper">
          <div className="details">
            <div className="details-image">
              <img src={promotion.ImageUrl} />
              <div className="details-logo">
                <img src={promotion.BrandIconUrl} />
              </div>
              <div className="details-due-date">{promotion.RemainingText}</div>
            </div>
            <div
              className="details-title"
              dangerouslySetInnerHTML={{ __html: promotion.Title }}
            />
            <div
              className="details-description"
              dangerouslySetInnerHTML={{ __html: promotion.Description }}
            />
            <div className="details-button">
              <Button variant="join-now " label="Hemen Katıl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
