"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import data from "../data/data.js";

const CriterionNode = ({ criterion, depth = 0, isExclusion = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasSubcriteria = criterion.subcriteria && criterion.subcriteria.length > 0;

  const renderSubcriteria = () => {
    if (!hasSubcriteria) return null;

    return (
      <div className="pl-4 mt-2">
        {criterion.subcriterion_logical_operator && (
          <div className="text-sm text-gray-500 mb-2">
            Logical Operator: {criterion.subcriterion_logical_operator.toUpperCase()}
          </div>
        )}
        {criterion.subcriteria.map((subcriterion, index) => (
          <CriterionNode
            key={subcriterion.criterion_id}
            criterion={subcriterion}
            depth={depth + 1}
            isExclusion={isExclusion}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className={`
        border rounded-md mb-2 p-2 
        ${isExclusion ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"}
      `}
    >
      <div
        className="flex items-center cursor-pointer"
        onClick={() => hasSubcriteria && setIsExpanded(!isExpanded)}
      >
        {hasSubcriteria &&
          (isExpanded ? (
            <ChevronDown className="mr-2 h-4 w-4" />
          ) : (
            <ChevronRight className="mr-2 h-4 w-4" />
          ))}
        <span className={`font-medium ${hasSubcriteria ? "" : "ml-6"}`}>
          {criterion.criterion_id}: {criterion.criterion_description}
        </span>
      </div>

      {isExpanded && renderSubcriteria()}
    </div>
  );
};

const BevacizumabDecisionTree = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Decision Tree</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="inclusion">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="inclusion">Inclusion Criteria</TabsTrigger>
            <TabsTrigger value="exclusion">Exclusion Criteria</TabsTrigger>
          </TabsList>
          <TabsContent value="inclusion">
            <div className="space-y-4">
              {data.inclusion.map((criterion) => (
                <CriterionNode
                  key={criterion.criterion_id}
                  criterion={criterion}
                  isExclusion={false}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="exclusion">
            <div className="space-y-4">
              {data.exclusion.map((criterion) => (
                <CriterionNode
                  key={criterion.criterion_id}
                  criterion={criterion}
                  isExclusion={true}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BevacizumabDecisionTree;
