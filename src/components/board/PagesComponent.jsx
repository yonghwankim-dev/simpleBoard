import { useState } from "react";
import { useHistory } from "react-router-dom";

function PagesComponent(props){

    const [curPage, setCurPage] = useState(1);
    const history = useHistory();

    // 페이지 변경
    const onChangePage = (num)=>{
        setCurPage(num);
        props.onSubmit(num);
        // history.push("/board");
    }

    // 각각의 페이지 버튼 생성
    const page = (pageNum, active)=>{
        const names = "paginate_button page-item " + active;
        return (
            // className="active" 적용시 페이지 활성화 스타일
            <li className={names} key={pageNum}>
                <a onClick={()=>{onChangePage(pageNum)}} aria-controls="dataTable" data-dt-idx={pageNum} tabIndex="0" className="page-link">{pageNum}</a>
            </li>
        );
    }

    // 페이지 그룹 생성
    const pageList = [];
    const lastPage = (props.totalPosting / 10)+1;
    for(let i=1;i<=6;i++)
    {
        if(i==curPage)  // 현재 페이지의 className에 active 클래스 추가
        {
            pageList.push(page(i,'active'));
        }
        else
        {
            pageList.push(page(i,''));
        }
        
    }

    

    return (
        <>
        {pageList}
        </>
    );
}

export default PagesComponent;