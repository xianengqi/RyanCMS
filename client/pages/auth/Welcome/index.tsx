import React from 'react';
import { Button } from 'antd';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

export default function Welcome() {
	return (
		(
			<div className={styles['container']}>
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundSize: 'cover',
						backgroundImage: 'url(http://assets.maocanhua.cn/Fl--4FkKVtiNFOLUL_RIcSFLjBkg)',
						backgroundPosition: 'center'
					}}
				/>

				<div className={styles['excellent-home-page-background']} />
				<div className={styles['excellent-home-page-content-wrapper']}>
					<div className={styles['excellent-home-page-content']}>
						<h2 className={styles['title']}>RyanCMS 2.0 </h2>
						<p className={styles['subtitle']}>更强大的功能，更舒适的使用体验</p>
						<div
							className={styles['excellent-home-page-buttons']}
							style={{ textAlign: 'center', marginTop: 70 }}
						>
							<Link to="/login">
								<Button type="primary" size="large" style={{ backgroundColor: '#00CE72' }}>
									马上登陆
								</Button>
							</Link>
							&emsp;
							<Link to="/register">
								<Button type="primary" size="large" style={{ backgroundColor: '#00bbcf' }}>
									立即注册
								</Button>
							</Link>
						</div>

						<div style={{ marginTop: '80px', position: 'relative' }}>
							<div className={styles['git-container']} />
						</div>
					</div>
				</div>
			</div>
		)
	);
}