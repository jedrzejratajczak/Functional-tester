﻿using Funtest.TransferObject.TestSuite.Requests;
using Funtest.TransferObject.TestSuite.Responses;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Funtest.Services.Interfaces
{
    public interface ITestSuiteService
    {
        List<GetTestSuiteResponse> GetAllTestSuites();
        Task<bool> AddTestSuite(AddTestSuiteRequest request);
        bool IsTestSuiteExist(Guid id);
        Task<GetTestSuiteWithTestsResponse> GetTestSuiteWithTests(Guid id);
        List<GetTestSuiteResponse> GetTestSuiteForTestPlan(Guid testPlanId);
    }
}
