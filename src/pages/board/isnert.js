import {Link, useHistory } from "react-router-dom";
import {useState, useEffect} from 'react';
function Insert()
{
    return (
        <>
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    {
                        // Nested Row within Card Body
                    }
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">게시글 작성</h1>
                                </div>
                                <form className="user" action='/main/board/insert' method="post">
                                    <div className="form-group">
                                        <div className="form-floating">
                                            <input type="text" className="form-control rounded" id="title" placeholder="제목" />
                                            <label for="title">제목</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div class="form-floating">
                                            <textarea class="form-control rounded" placeholder="내용" id="content" style={{height : '100px'}}></textarea>
                                            <label for="content">내용</label>
                                        </div>
                                    </div>

                                    <button type='submit' className="btn btn-primary btn-user btn-block">
                                        작성
                                    </button>
                                    <a href="/main/board" className="btn btn-danger btn-user btn-block">
                                        취소
                                    </a>
                                </form>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Insert;