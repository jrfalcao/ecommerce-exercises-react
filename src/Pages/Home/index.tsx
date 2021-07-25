import React, { useState, useEffect } from 'react';

import * as S from './styled';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import IProduct from '../../Services/IProduct';

// import api from '../../Services/api';
import { produtos } from '../../mockProducts';

const Home: React.FC = () => {

    const [data, setData] = useState<IProduct[]>([]);
    useEffect(() => {
        /////// Abstraindo API para rodar no Netlify. ///////
        setData(produtos);
        // api.get('').then(res => {
        //    setData(res.data);
        // })
    }, []);

    const handleCard = ( index: number ) => {
        localStorage.setItem(`@product-${index}`, JSON.stringify(data[index]));
    }

    return (
        <S.Main>
            <Header />
            <S.Container>
                <S.Section>
                    { data.map( (prod, index) => (
                        <div className="product" key={prod.id}>
                            <img src={prod.photo} alt={prod.name} width="200" height="auto" />
                            <h3>{prod.name}</h3>
                            <span>{prod.description}</span>
                            <h6>Price: {prod.price.toLocaleString('pt-br')}</h6>
                            <button onClick={() => handleCard(index)}>Adicionar ao carrinho</button>
                        </div>
                    )) }
                </S.Section>
            </S.Container>
            <Footer />
        </S.Main>
    )
}

export default Home;
