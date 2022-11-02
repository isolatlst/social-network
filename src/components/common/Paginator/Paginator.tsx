import React, {BaseSyntheticEvent, useState} from 'react'
import classes from './Paginator.module.css'

type PropsType = {
    pagesCount: number
    totalPage: number
    pageSize: number
    portionSize?: number
    swapPage: (page: number) => void
    selectPageSize: (e: BaseSyntheticEvent) => void
}


const Paginator: React.FC<PropsType> = ({pagesCount, totalPage, pageSize, portionSize = 5, ...props}) => {
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize)
    const [currentPortion, setCurrentPortion] = useState(Math.ceil(totalPage / portionSize))
    const leftPortionPageNumber = portionSize * (currentPortion - 1)
    const rightPortionPageNumber = leftPortionPageNumber + portionSize + 1

    return (
        <div className={classes.navigation}>
            <div className={classes.modulePagination}>
                {portionCount > 1 &&
                    <button disabled={!(currentPortion > 1)}
                            className={`${classes.button} ${!(currentPortion > 1) && classes.disabled}`}
                            onClick={() => {
                                setCurrentPortion(currentPortion - 1)
                            }}>
                        {'<'}
                    </button>}
                {pages
                    .filter(page => page > leftPortionPageNumber && page < rightPortionPageNumber)
                    .map(page =>
                        <span key={page} onClick={() => props.swapPage(page)} className={totalPage === page ? classes.selectedPaginationLink : ''}> {page}</span>
                    )
                }
                {portionCount > 1 &&
                    <button disabled={currentPortion > portionCount}
                            className={`${classes.button} ${currentPortion >= portionCount && classes.disabled}`}
                            onClick={() => {
                                setCurrentPortion(currentPortion + 1)
                            }}>
                        {'>'}
                    </button>}
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

