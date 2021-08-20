import {useHistory } from "react-router-dom";

function Board(){
    return (
        <>
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
                                            <select name="dataTable_length" aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm">
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
                                        <label>검색:
                                            <input type="search" className="form-control form-control-sm" placeholder="" aria-controls="dataTable"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <table className="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info" style={{width:'100%'}}>
                                <thead>
                                    <tr role="row">
                                        <th className="sorting sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="번호 : 게시글의 등록번호, 최신순일수록 상위에 위치한다." style={{width: '57px'}}>번호</th>
                                        <th className="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="제목 : 게시글의 제목" style={{width: '61px'}}>제목</th>
                                        <th className="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="글쓴이 : 게시글의 작성자" style={{width: '49px'}}>글쓴이</th>
                                        <th className="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="작성일 : 게시글 작성일자" style={{width: '31px'}}>작성일</th>
                                        <th className="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="조회 : 게시글의 조회수" style={{width: '68px'}}>조회</th>
                                        <th className="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="추천 : 게시글의 추천수" style={{width: '67px'}}>추천</th>
                                    </tr>
                                </thead>
                                <tbody>                                
                                    <tr className="odd">
                                            <td className="sorting_1">3</td>
                                            <td><a href="/main/board/detail" className="text-decoration-none text-dark">title3</a></td>
                                            <td>author3</td>
                                            <td>2021/08/06</td>
                                            <td>0</td>
                                            <td>0</td>
                                    </tr>
                                    <tr className="even">
                                            <td className="sorting_1">2</td>
                                            <td>title2</td>
                                            <td>author2</td>
                                            <td>2021/08/06</td>
                                            <td>0</td>
                                            <td>0</td>
                                    </tr>
                                    <tr className="odd">
                                            <td className="sorting_1">1</td>
                                            <td>title1</td>
                                            <td>author1</td>
                                            <td>2021/08/06</td>
                                            <td>0</td>
                                            <td>0</td>
                                    </tr>
                                    
                                    </tbody>
                            </table>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-7">
                                    <div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                                        <ul className="pagination justify-content-end">
                                            <li className="paginate_button page-item previous disabled" id="dataTable_previous">
                                                <a href="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" className="page-link">Previous</a>
                                            </li>
                                            <li className="paginate_button page-item active">
                                                <a href="#" aria-controls="dataTable" data-dt-idx="1" tabindex="0" className="page-link">1</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#" aria-controls="dataTable" data-dt-idx="2" tabindex="0" className="page-link">2</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#" aria-controls="dataTable" data-dt-idx="3" tabindex="0" className="page-link">3</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#" aria-controls="dataTable" data-dt-idx="4" tabindex="0" className="page-link">4</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#" aria-controls="dataTable" data-dt-idx="5" tabindex="0" className="page-link">5</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#" aria-controls="dataTable" data-dt-idx="6" tabindex="0" className="page-link">6</a>
                                            </li>
                                            <li className="paginate_button page-item next" id="dataTable_next">
                                                <a href="#" aria-controls="dataTable" data-dt-idx="7" tabindex="0" className="page-link">Next</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-5">
                                    <div className="d-flex justify-content-end">
                                        <a href="/main/board/insert" class="btn btn-primary">
                                            <span class="text">글쓰기</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Board;

