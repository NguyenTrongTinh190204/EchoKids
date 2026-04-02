<?php

namespace App\Http\Controllers\Api; 

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class AIController extends Controller
{
    public function chat(Request $request)
    {
        // 1. Validate dữ liệu đầu vào
        $request->validate([
            'message' => 'required|string',
        ]);

        try {
            // 2. Lấy User ID (Tạm lấy 15 để test RAG dữ liệu cá nhân)
            $userId = 15;

            // 3. Gọi sang Server Python (Cổng 8001)
            $response = Http::timeout(30)->post('http://127.0.0.1:8001/api/ai/chat', [
                'user_id' => $userId,
                'message' => $request->message,
            ]);

            if ($response->successful()) {
                // Trả về dữ liệu từ Python (trong đó có trường 'reply')
                return response()->json($response->json());
            }

            return response()->json([
                'success' => false,
                'reply' => 'Cô Họa Mi đang bận, bé chờ xíu nhé!'
            ], 500);

        } catch (\Exception $e) {
            Log::error("Lỗi gọi AI: " . $e->getMessage());
            return response()->json([
                'success' => false,
                'reply' => 'Hệ thống đang gặp sự cố kết nối.'
            ], 500);
        }
    }
}
