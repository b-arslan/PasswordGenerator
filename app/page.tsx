'use client';
import { useState } from 'react';
import styles from './styles/page.module.scss';
import { Layout, Row, Col, Button, Input, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { validateHeaderName } from 'http';

const { Content } = Layout;

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleGenerate = () => {
        setLoading(true);
        
        setTimeout(() => {
            setInputValue('bAdnit-zeqsam-qykpi4');
        }, 1000);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    }

    const handleClipboard = () => {
        navigator.clipboard.writeText(inputValue);
        message.success('Password Copied!');
    }

    return (

        <Layout className={styles.layout}>
            <Content className={styles.content}>
                <Row style={{height: '100%', width: '100%'}}>
                    <Col span={24} className={styles.col} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <div className={styles.myDiv}>
                            <div style={{textAlign: 'center'}}>
                                <h1 className={styles.title}>Password Generator</h1>
                                <h4 className={styles.desc}>With an AI powered system, you can generate unique and strong passwords</h4>
                            </div>
                            <Button type='primary' className={styles.btn} loading={loading} onClick={handleGenerate}>Generate</Button>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
                                <Input value={inputValue} disabled placeholder='generated password' onChange={handleInputChange}  id='passwordInput' className={styles.inputPass} /> <CopyOutlined onClick={handleClipboard} style={{fontSize: '24px', color: '#000', cursor: 'pointer'}}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Content>
        </Layout>

    );
}

export default Home;