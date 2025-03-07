const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"班级管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryBanji"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"课程类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryKecheng"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryNews"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"作业类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZuoyejilu"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"教师管理",
                        "menuJump":"列表",
                        "tableName":"jiaoshi"
                    }
                ],
                "menu":"教师管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"课程信息管理",
			            "menuJump":"列表",
			            "tableName":"kecheng"
			        }
			    ],
			    "menu":"课程信息管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "报表",
                            "删除"
                        ],
                        "menu":"考勤通知",
                        "menuJump":"列表",
                        "tableName":"kaoqin"
                    },
					{
					    "buttons":[
					        "查看",
					        "新增",
					        "修改",
					        "删除"
					    ],
					    "menu":"考勤详情",
					    "menuJump":"列表",
					    "tableName":"kaoqinxiangqing"
					}
                ],
                "menu":"考勤信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"学生管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"学生管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"作业回答管理",
                        "menuJump":"列表",
                        "tableName":"zuoyehuida"
                    }
                ],
                "menu":"作业回答管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "报表",
                            "删除"
                        ],
                        "menu":"作业发布管理",
                        "menuJump":"列表",
                        "tableName":"zuoyejilu"
                    }
                ],
                "menu":"作业发布管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"教师管理",
	                    "menuJump":"列表",
	                    "tableName":"jiaoshi"
	                }
	            ],
	            "menu":"教师管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
							"发布"
			            ],
			            "menu":"课程信息管理",
			            "menuJump":"列表",
			            "tableName":"kecheng"
			        }
			    ],
			    "menu":"课程信息管理"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增"
	                    ],
	                    "menu":"考勤通知",
	                    "menuJump":"列表",
	                    "tableName":"kaoqin"
	                },
					{
					    "buttons":[
					        "查看"
					    ],
					    "menu":"考勤详情",
					    "menuJump":"列表",
					    "tableName":"kaoqinxiangqing"
					}
	            ],
	            "menu":"考勤信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告信息管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"学生管理",
	                    "menuJump":"列表",
	                    "tableName":"yonghu"
	                }
	            ],
	            "menu":"学生管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改"
	                    ],
	                    "menu":"作业发布管理",
	                    "menuJump":"列表",
	                    "tableName":"zuoyejilu"
	                }
	            ],
	            "menu":"作业发布管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
	                        "批改"
			            ],
			            "menu":"作业回答管理",
			            "menuJump":"列表",
			            "tableName":"zuoyehuida"
			        }
			    ],
			    "menu":"作业回答管理"
			}
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"教师",
	    "tableName":"jiaoshi"
	},
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"教师管理",
	                    "menuJump":"列表",
	                    "tableName":"jiaoshi"
	                }
	            ],
	            "menu":"教师管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"课程信息管理",
			            "menuJump":"列表",
			            "tableName":"kecheng"
			        }
			    ],
			    "menu":"课程信息管理"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "考勤"
	                    ],
	                    "menu":"考勤通知",
	                    "menuJump":"列表",
	                    "tableName":"kaoqin"
	                },
	        		{
	        		    "buttons":[
	        		        "查看"
	        		    ],
	        		    "menu":"考勤详情",
	        		    "menuJump":"列表",
	        		    "tableName":"kaoqinxiangqing"
	        		}
	            ],
	            "menu":"考勤信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告信息管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"作业发布管理",
	                    "menuJump":"列表",
	                    "tableName":"zuoyejilu"
	                }
	            ],
	            "menu":"作业发布管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
							"新增"
			            ],
			            "menu":"作业回答管理",
			            "menuJump":"列表",
			            "tableName":"zuoyehuida"
			        }
			    ],
			    "menu":"作业回答管理"
			}
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"学生",
	    "tableName":"yonghu"
	}
]
    }
}
export default menu;
