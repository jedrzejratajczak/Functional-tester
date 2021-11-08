﻿using Funtest.TransferObject.TestProcedure.Requests;
using Funtest.TransferObject.TestProcedure.Responses;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Funtest.Services.Interfaces
{
    public interface ITestProcedureService
    {
        bool IsTestProcedureExist(Guid id);
        bool IsTestProcedureHasAnySteps(Guid id);
        Task<bool> AddTestProcedure(AddTestProcedureRequest testProcedure);
        Task<GetTestProcedureResponse> GetTestProcedureById(Guid id);
        Task<bool> EditTestProcedure(Guid id, EditTestProcedureRequest request);
        List<GetTestProcedureIdentityValueResponse> GetAllTestProceduresForProduct(Guid productId);

    }
}
