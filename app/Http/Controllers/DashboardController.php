<?php

namespace App\Http\Controllers;

use App\Models\Dashboard;
use App\Models\Department;
use App\Models\Employee;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */


    public function index()
    {
        $employees = Employee::all();

        $employeesPerDepartment = DB::table('employees')
            ->join('departments', 'employees.department_id', '=', 'departments.id')
            ->select('departments.department_name as department', DB::raw('count(*) as count'))
            ->groupBy('departments.department_name')
            ->orderBy('departments.department_name')
            ->get();

        // DEMOGRAPHICS AND BASIC INFORMATION
        $sexDistribution = DB::table('employees')
            ->select('sex', DB::raw('count(*) as count'))
            ->groupBy('sex')
            ->get();

        $civilStatusDistribution = DB::table('employees')
            ->select('civil_status', DB::raw('count(*) as count'))
            ->groupBy('civil_status')
            ->get();




        return Inertia::render('Dashboard', [
            'stats' => [

                // top cards
                'totalEmployees' => Employee::count(),
                'departments' => Department::count(),
                'maleCount' => Employee::where('Sex', 'Male')->count(),
                'femaleCount' => Employee::where('Sex', 'Female')->count(),

                // charts
                'regularCount' => Employee::where('employment_type', 'Regular')->count(),
                'spCount' => Employee::where('employment_type', 'Service Provider')->count(),
                'specialJOCount' => Employee::where('employment_type', 'Special Job Order')->count(),
                'joCount' => Employee::where('employment_type', 'Job Order')->count(),


                // Demographics and basic info
                'sexDistribution' => $sexDistribution,
                'civilStatusDistribution' => $civilStatusDistribution,


                'employeesPerDepartment' => $employeesPerDepartment,

                // 'hiresPerMonth' => $hiresPerMonth,
                // 'positionType' => $positionType,
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Dashboard $dashboard)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Dashboard $dashboard)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Dashboard $dashboard)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Dashboard $dashboard)
    {
        //
    }
}
