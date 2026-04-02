<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DanhMucBaiHoc extends Model
{
    protected $table = 'danh_muc_bai_hocs';

    protected $fillable = [
        'ten_danh_muc',
        'mo_ta',
        'thu_tu',
    ];
}
