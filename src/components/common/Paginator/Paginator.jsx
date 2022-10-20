import React from 'react'
import classes from './Paginator.module.css'



function Paginator({ pagesCount, totalPage, pageSize, ...props }) {
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	return (
		<div className={classes.navigation}>
			<div className={classes.modulePagination} onClick={props.swapPage}>
				{
					pages.map((page, index) =>
						<span key={index} className={totalPage === page ? classes.selectedPaginationLink : ''}> {page}</span>
					)
				}
			</div>
			<div className={classes.pageSize} onClick={props.selectPageSize}>
				<span className={pageSize === 3 ? classes.selectedPageSize : ''}>3</span>
				<span className={pageSize === 5 ? classes.selectedPageSize : ''}>5</span>
				<span className={pageSize === 10 ? classes.selectedPageSize : ''}>10</span>
			</div>
		</div>
	)
}

export default Paginator;

