import {memo, useEffect, useState} from 'react';
import {Col, Row} from "antd";
import Api from '../../api/api';
import Economy from "../components/Economy/Economy";
import Technology from "../components/Technology/Technology";
import World from "../components/World/World";

export function Home() {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    const handNews = (articles) => {
        setLoading(false);
        setNews({
            economy: articles[0]?.value.value,
            technology: articles[1]?.value.value,
            world: articles[2]?.value.value,
        });
    };

    useEffect(() => {
        setLoading(true);
        Promise.allSettled([
            Api.getNews('economy'),
            Api.getNews('technology'),
            Api.getNews('world'),
        ])
            .then(handNews)
            .catch((error) => console.log('Ocoreeu um erro => ', error));
    }, []);

    if (loading) return (<div>Carregando!!!</div>);

    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col span={24} md={16}>
                    <h2>World</h2>
                    <World values={news?.world}/>
                </Col>

                <Col span={24} md={8}>
                    <h2>Economy</h2>
                    <Economy values={news?.economy}/>
                </Col>
            </Row>
            <hr/>
            <Row gutter={[16, 16]}>
                <Col span={24} md={16}>
                    <h2>Technology</h2>
                    <Technology values={news?.technology}/>
                </Col>
            </Row>
        </div>
    );
}

export default memo(Home);