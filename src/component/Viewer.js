import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchMovie } from "../store/Store";
import Loading2 from "./Loading2";
import styles from "../style/Viewer.module.css";

function Viewer(){
    const {id} = useParams();
    const {status, data} = useQuery([id],()=>fetchMovie(id),{
        staleTime: Infinity,
    })

    if(status === 'success'){
        console.log(data);
        return(
            <div id="appMountPoint">
                <div>
                    <div className={styles.nmtitleWrapper}>
                        <section className={styles.nmtitleSection}>
                            <div className={styles.heroContainer}>
                                <div className={styles.infoContainer}>
                                    <div className={styles.detailsContainer}>
                                        <div className={styles.titleInfo}>
                                            <h1 className={styles.titleTitle}>더 글로리</h1>
                                            <div className={styles.titleInfoMetadataWrapper}>
                                                <span className={styles.titleInfoMetadataItem}>2022</span>
                                                <span className={styles.infoSpacer}> | </span>
                                                <span className={styles.titleInfoMetadataItem}>
                                                    <span className={styles.maturityRating}>
                                                        <span className={styles.screenReaderText}>관람등급:</span>
                                                        <span className={styles.maturityNumber}>청불 </span>
                                                    </span>
                                                </span>
                                                <span className={styles.infoSpacer}> | </span>
                                                <span className={styles.titleInfoMetadataItem}>
                                                    <span className={styles.duration}>
                                                        <span className={styles.testDurStr}>시즌 1개</span>
                                                    </span>
                                                </span>
                                                <span className={styles.infoSpacer}> | </span>
                                                <a className={styles.titleInfoMetadataItem} href="https://www.netflix.com/kr/browse/genre/637977">드라마 장르</a>
                                            </div>
                                            <div className={styles.titleInfoSynopsisTalent}>
                                                <div className={styles.titleInfoSynopsis}>고등학교 시절, 끔찍한 괴롭힘에 시달렸던 여자. 많은 시간이 흐른 후, 가해자들을 응징하기 위해 그녀가 치밀한 복수를 감행한다.</div>
                                                <div className={styles.titleInfoTalent}>
                                                    <div className={styles.titleDataInfoItem}>
                                                        <span className={styles.titleDataInfoItemLabel}>주연:</span>
                                                        <span className={styles.titleDataInfoItemList}>송혜교,이도현,임지연</span>
                                                    </div>
                                                    <div className={styles.titleDataInfoItem}>
                                                        <span className={styles.titleDataInfoItemLabel}>크리에이터:</span>
                                                        <span className={styles.titleDataInfoItemList}>김은숙,안길호</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.heroImageContainer}>
                                    <img className={styles.heroImage} src={`https://image.tmdb.org/t/p/w500/${data.image}`}></img>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <Loading2></Loading2>
            </div>
        )
    }
}

export default Viewer;