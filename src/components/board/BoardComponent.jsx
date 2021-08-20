import { useCallback } from 'react';
import { useHistory } from 'react-router';
import useInput from '../customhook/CustomHook'
import ApiService from '../../ApiService';
import PagesComponent from './PagesComponent';
import Posting from './Posting';
import { useState } from 'react';

function BoardComponent(){
    const history = useHistory();

    const [postingUnits,setPostingUnits] = useInput(10);
    const [findInput, setFindInput] = useInput('');
    const [message, setMessage] = useInput('');
    const [curPage, setCurPage] = useState(1);
    const [postings, setPostings] = useState('');

    // 페이지 변경
    const onChangePageSubmit = (num) =>{
        setCurPage(num);
    }

    const onChangePostingsSubmit = (data)=>{
        setPostings(data);
    }


    // 서버에 게시글 단위 요청
    const onPostingUnitsSubmit = useCallback((e)=>{
        e.preventDefault();

        setPostingUnits(e);

        // ApiService.changePostingUnits(postingUnits)
        //     .then(res =>{
        //         setMessage("게시글 단위 " + postingUnits + "로 변경 완료");
        //         console.log(message);
        //         history.push('/board');
        //     })
        //     .catch(err =>{
        //         console.log('changePostingUnits Error',err);
        //     });
    },[postingUnits,setPostingUnits, message, setMessage, history]);

    // 서버에 검색 요청
    const onSearchSubmit = useCallback((e)=>{

        e.preventDefault();

        ApiService.searchingPosting(findInput)
            .then(res =>{
                setMessage(findInput + "내용의 게시글 검색을 성공하였습니다.");
                console.log(message);
                history.push('/board');
            })
            .catch(err =>{
                console.log('searchingPosting Error',err);
            });
    },[findInput, message, setMessage, history]);

    return (        
        <div className="container-fluid">

            {
                // DataTales Example
            }
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Board</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="dataTables_length" id="dataTable_length">
                                        <label> 게시글 단위
                                            <select name="dataTable_length" aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm" onChange={onPostingUnitsSubmit}>
                                                    <option value="10">10</option>
                                                    <option value="25">25</option>
                                                    <option value="50">50</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </label>
                                        
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-6">
                                    <div id="dataTable_filter" className="dataTables_filter">
                                        <form onSubmit={onSearchSubmit}>
                                            <label>검색:
                                                <input type="text" className="form-control form-control-sm" placeholder="" aria-controls="dataTable" value={findInput} onChange={setFindInput}/>
                                            </label>
                                            <button type="submit" className="btn btn-primary btn-user">검색</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing="0" role="grid" aria-describedby="dataTable_info" style={{width:'100%'}}>
                                <thead>
                                    <tr role="row">
                                        <th className="sorting sorting_asc" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="번호 : 게시글의 등록번호, 최신순일수록 상위에 위치한다." style={{width: '57px'}}>번호</th>
                                        <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="제목 : 게시글의 제목" style={{width: '61px'}}>제목</th>
                                        <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="글쓴이 : 게시글의 작성자" style={{width: '49px'}}>글쓴이</th>
                                        <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="작성일 : 게시글 작성일자" style={{width: '31px'}}>작성일</th>
                                        <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="조회 : 게시글의 조회수" style={{width: '68px'}}>조회</th>
                                        <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="추천 : 게시글의 추천수" style={{width: '67px'}}>추천</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Posting postingUnits={postingUnits} curPage={curPage} onSubmit={onChangePostingsSubmit}/>
                                </tbody>
                            </table>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-7">
                                    <div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                                        <ul className="pagination justify-content-end">
                                            <li className="paginate_button page-item previous disabled" id="dataTable_previous">
                                                <a href="/board?p=prev" aria-controls="dataTable" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
                                            </li>
                                            <PagesComponent onSubmit={onChangePageSubmit}/>
                                            <li className="paginate_button page-item next" id="dataTable_next">
                                                <a href="/board?p=next" aria-controls="dataTable" data-dt-idx="7" tabIndex="0" className="page-link">Next</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-5">
                                    <div className="d-flex justify-content-end">
                                        <a href="/board/insert" className="btn btn-primary">
                                            <span className="text">글쓰기</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default BoardComponent;

