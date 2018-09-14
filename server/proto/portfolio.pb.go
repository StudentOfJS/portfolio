// Code generated by protoc-gen-go. DO NOT EDIT.
// source: proto/portfolio.proto

package portfolio

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

import (
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type Bio struct {
	Title                string   `protobuf:"bytes,1,opt,name=title,proto3" json:"title,omitempty"`
	Description          string   `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Bio) Reset()         { *m = Bio{} }
func (m *Bio) String() string { return proto.CompactTextString(m) }
func (*Bio) ProtoMessage()    {}
func (*Bio) Descriptor() ([]byte, []int) {
	return fileDescriptor_portfolio_3243d94d74065ced, []int{0}
}
func (m *Bio) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Bio.Unmarshal(m, b)
}
func (m *Bio) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Bio.Marshal(b, m, deterministic)
}
func (dst *Bio) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Bio.Merge(dst, src)
}
func (m *Bio) XXX_Size() int {
	return xxx_messageInfo_Bio.Size(m)
}
func (m *Bio) XXX_DiscardUnknown() {
	xxx_messageInfo_Bio.DiscardUnknown(m)
}

var xxx_messageInfo_Bio proto.InternalMessageInfo

func (m *Bio) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *Bio) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

type Course struct {
	Institution          string   `protobuf:"bytes,1,opt,name=institution,proto3" json:"institution,omitempty"`
	Description          string   `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	Dates                string   `protobuf:"bytes,3,opt,name=dates,proto3" json:"dates,omitempty"`
	Name                 string   `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Course) Reset()         { *m = Course{} }
func (m *Course) String() string { return proto.CompactTextString(m) }
func (*Course) ProtoMessage()    {}
func (*Course) Descriptor() ([]byte, []int) {
	return fileDescriptor_portfolio_3243d94d74065ced, []int{1}
}
func (m *Course) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Course.Unmarshal(m, b)
}
func (m *Course) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Course.Marshal(b, m, deterministic)
}
func (dst *Course) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Course.Merge(dst, src)
}
func (m *Course) XXX_Size() int {
	return xxx_messageInfo_Course.Size(m)
}
func (m *Course) XXX_DiscardUnknown() {
	xxx_messageInfo_Course.DiscardUnknown(m)
}

var xxx_messageInfo_Course proto.InternalMessageInfo

func (m *Course) GetInstitution() string {
	if m != nil {
		return m.Institution
	}
	return ""
}

func (m *Course) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *Course) GetDates() string {
	if m != nil {
		return m.Dates
	}
	return ""
}

func (m *Course) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type Education struct {
	Courses              []*Course `protobuf:"bytes,1,rep,name=courses,proto3" json:"courses,omitempty"`
	XXX_NoUnkeyedLiteral struct{}  `json:"-"`
	XXX_unrecognized     []byte    `json:"-"`
	XXX_sizecache        int32     `json:"-"`
}

func (m *Education) Reset()         { *m = Education{} }
func (m *Education) String() string { return proto.CompactTextString(m) }
func (*Education) ProtoMessage()    {}
func (*Education) Descriptor() ([]byte, []int) {
	return fileDescriptor_portfolio_3243d94d74065ced, []int{2}
}
func (m *Education) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Education.Unmarshal(m, b)
}
func (m *Education) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Education.Marshal(b, m, deterministic)
}
func (dst *Education) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Education.Merge(dst, src)
}
func (m *Education) XXX_Size() int {
	return xxx_messageInfo_Education.Size(m)
}
func (m *Education) XXX_DiscardUnknown() {
	xxx_messageInfo_Education.DiscardUnknown(m)
}

var xxx_messageInfo_Education proto.InternalMessageInfo

func (m *Education) GetCourses() []*Course {
	if m != nil {
		return m.Courses
	}
	return nil
}

type Skill struct {
	Category             string   `protobuf:"bytes,1,opt,name=category,proto3" json:"category,omitempty"`
	Type                 string   `protobuf:"bytes,2,opt,name=type,proto3" json:"type,omitempty"`
	Description          string   `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Skill) Reset()         { *m = Skill{} }
func (m *Skill) String() string { return proto.CompactTextString(m) }
func (*Skill) ProtoMessage()    {}
func (*Skill) Descriptor() ([]byte, []int) {
	return fileDescriptor_portfolio_3243d94d74065ced, []int{3}
}
func (m *Skill) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Skill.Unmarshal(m, b)
}
func (m *Skill) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Skill.Marshal(b, m, deterministic)
}
func (dst *Skill) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Skill.Merge(dst, src)
}
func (m *Skill) XXX_Size() int {
	return xxx_messageInfo_Skill.Size(m)
}
func (m *Skill) XXX_DiscardUnknown() {
	xxx_messageInfo_Skill.DiscardUnknown(m)
}

var xxx_messageInfo_Skill proto.InternalMessageInfo

func (m *Skill) GetCategory() string {
	if m != nil {
		return m.Category
	}
	return ""
}

func (m *Skill) GetType() string {
	if m != nil {
		return m.Type
	}
	return ""
}

func (m *Skill) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

type Skills struct {
	Skills               []*Skill `protobuf:"bytes,1,rep,name=skills,proto3" json:"skills,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Skills) Reset()         { *m = Skills{} }
func (m *Skills) String() string { return proto.CompactTextString(m) }
func (*Skills) ProtoMessage()    {}
func (*Skills) Descriptor() ([]byte, []int) {
	return fileDescriptor_portfolio_3243d94d74065ced, []int{4}
}
func (m *Skills) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Skills.Unmarshal(m, b)
}
func (m *Skills) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Skills.Marshal(b, m, deterministic)
}
func (dst *Skills) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Skills.Merge(dst, src)
}
func (m *Skills) XXX_Size() int {
	return xxx_messageInfo_Skills.Size(m)
}
func (m *Skills) XXX_DiscardUnknown() {
	xxx_messageInfo_Skills.DiscardUnknown(m)
}

var xxx_messageInfo_Skills proto.InternalMessageInfo

func (m *Skills) GetSkills() []*Skill {
	if m != nil {
		return m.Skills
	}
	return nil
}

type Project struct {
	Id                   int32    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Title                string   `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	Meta                 string   `protobuf:"bytes,3,opt,name=meta,proto3" json:"meta,omitempty"`
	Description          string   `protobuf:"bytes,4,opt,name=description,proto3" json:"description,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Project) Reset()         { *m = Project{} }
func (m *Project) String() string { return proto.CompactTextString(m) }
func (*Project) ProtoMessage()    {}
func (*Project) Descriptor() ([]byte, []int) {
	return fileDescriptor_portfolio_3243d94d74065ced, []int{5}
}
func (m *Project) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Project.Unmarshal(m, b)
}
func (m *Project) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Project.Marshal(b, m, deterministic)
}
func (dst *Project) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Project.Merge(dst, src)
}
func (m *Project) XXX_Size() int {
	return xxx_messageInfo_Project.Size(m)
}
func (m *Project) XXX_DiscardUnknown() {
	xxx_messageInfo_Project.DiscardUnknown(m)
}

var xxx_messageInfo_Project proto.InternalMessageInfo

func (m *Project) GetId() int32 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Project) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *Project) GetMeta() string {
	if m != nil {
		return m.Meta
	}
	return ""
}

func (m *Project) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

type Projects struct {
	Projects             []*Project `protobuf:"bytes,1,rep,name=projects,proto3" json:"projects,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *Projects) Reset()         { *m = Projects{} }
func (m *Projects) String() string { return proto.CompactTextString(m) }
func (*Projects) ProtoMessage()    {}
func (*Projects) Descriptor() ([]byte, []int) {
	return fileDescriptor_portfolio_3243d94d74065ced, []int{6}
}
func (m *Projects) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Projects.Unmarshal(m, b)
}
func (m *Projects) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Projects.Marshal(b, m, deterministic)
}
func (dst *Projects) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Projects.Merge(dst, src)
}
func (m *Projects) XXX_Size() int {
	return xxx_messageInfo_Projects.Size(m)
}
func (m *Projects) XXX_DiscardUnknown() {
	xxx_messageInfo_Projects.DiscardUnknown(m)
}

var xxx_messageInfo_Projects proto.InternalMessageInfo

func (m *Projects) GetProjects() []*Project {
	if m != nil {
		return m.Projects
	}
	return nil
}

type Job struct {
	Company              string   `protobuf:"bytes,1,opt,name=company,proto3" json:"company,omitempty"`
	JobTitle             string   `protobuf:"bytes,2,opt,name=job_title,json=jobTitle,proto3" json:"job_title,omitempty"`
	Location             string   `protobuf:"bytes,3,opt,name=location,proto3" json:"location,omitempty"`
	Dates                string   `protobuf:"bytes,4,opt,name=dates,proto3" json:"dates,omitempty"`
	Description          string   `protobuf:"bytes,5,opt,name=description,proto3" json:"description,omitempty"`
	LogoUrl              string   `protobuf:"bytes,6,opt,name=logo_url,json=logoUrl,proto3" json:"logo_url,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Job) Reset()         { *m = Job{} }
func (m *Job) String() string { return proto.CompactTextString(m) }
func (*Job) ProtoMessage()    {}
func (*Job) Descriptor() ([]byte, []int) {
	return fileDescriptor_portfolio_3243d94d74065ced, []int{7}
}
func (m *Job) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Job.Unmarshal(m, b)
}
func (m *Job) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Job.Marshal(b, m, deterministic)
}
func (dst *Job) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Job.Merge(dst, src)
}
func (m *Job) XXX_Size() int {
	return xxx_messageInfo_Job.Size(m)
}
func (m *Job) XXX_DiscardUnknown() {
	xxx_messageInfo_Job.DiscardUnknown(m)
}

var xxx_messageInfo_Job proto.InternalMessageInfo

func (m *Job) GetCompany() string {
	if m != nil {
		return m.Company
	}
	return ""
}

func (m *Job) GetJobTitle() string {
	if m != nil {
		return m.JobTitle
	}
	return ""
}

func (m *Job) GetLocation() string {
	if m != nil {
		return m.Location
	}
	return ""
}

func (m *Job) GetDates() string {
	if m != nil {
		return m.Dates
	}
	return ""
}

func (m *Job) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *Job) GetLogoUrl() string {
	if m != nil {
		return m.LogoUrl
	}
	return ""
}

type Experience struct {
	Jobs                 []*Job   `protobuf:"bytes,1,rep,name=jobs,proto3" json:"jobs,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Experience) Reset()         { *m = Experience{} }
func (m *Experience) String() string { return proto.CompactTextString(m) }
func (*Experience) ProtoMessage()    {}
func (*Experience) Descriptor() ([]byte, []int) {
	return fileDescriptor_portfolio_3243d94d74065ced, []int{8}
}
func (m *Experience) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Experience.Unmarshal(m, b)
}
func (m *Experience) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Experience.Marshal(b, m, deterministic)
}
func (dst *Experience) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Experience.Merge(dst, src)
}
func (m *Experience) XXX_Size() int {
	return xxx_messageInfo_Experience.Size(m)
}
func (m *Experience) XXX_DiscardUnknown() {
	xxx_messageInfo_Experience.DiscardUnknown(m)
}

var xxx_messageInfo_Experience proto.InternalMessageInfo

func (m *Experience) GetJobs() []*Job {
	if m != nil {
		return m.Jobs
	}
	return nil
}

type GetBioResponse struct {
	Bio                  *Bio     `protobuf:"bytes,1,opt,name=bio,proto3" json:"bio,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetBioResponse) Reset()         { *m = GetBioResponse{} }
func (m *GetBioResponse) String() string { return proto.CompactTextString(m) }
func (*GetBioResponse) ProtoMessage()    {}
func (*GetBioResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_portfolio_3243d94d74065ced, []int{9}
}
func (m *GetBioResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetBioResponse.Unmarshal(m, b)
}
func (m *GetBioResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetBioResponse.Marshal(b, m, deterministic)
}
func (dst *GetBioResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetBioResponse.Merge(dst, src)
}
func (m *GetBioResponse) XXX_Size() int {
	return xxx_messageInfo_GetBioResponse.Size(m)
}
func (m *GetBioResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetBioResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetBioResponse proto.InternalMessageInfo

func (m *GetBioResponse) GetBio() *Bio {
	if m != nil {
		return m.Bio
	}
	return nil
}

type GetBioRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetBioRequest) Reset()         { *m = GetBioRequest{} }
func (m *GetBioRequest) String() string { return proto.CompactTextString(m) }
func (*GetBioRequest) ProtoMessage()    {}
func (*GetBioRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_portfolio_3243d94d74065ced, []int{10}
}
func (m *GetBioRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetBioRequest.Unmarshal(m, b)
}
func (m *GetBioRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetBioRequest.Marshal(b, m, deterministic)
}
func (dst *GetBioRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetBioRequest.Merge(dst, src)
}
func (m *GetBioRequest) XXX_Size() int {
	return xxx_messageInfo_GetBioRequest.Size(m)
}
func (m *GetBioRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetBioRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetBioRequest proto.InternalMessageInfo

type GetCVResponse struct {
	Skills               *Skills     `protobuf:"bytes,1,opt,name=skills,proto3" json:"skills,omitempty"`
	Jobs                 *Experience `protobuf:"bytes,2,opt,name=jobs,proto3" json:"jobs,omitempty"`
	Courses              *Education  `protobuf:"bytes,3,opt,name=courses,proto3" json:"courses,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *GetCVResponse) Reset()         { *m = GetCVResponse{} }
func (m *GetCVResponse) String() string { return proto.CompactTextString(m) }
func (*GetCVResponse) ProtoMessage()    {}
func (*GetCVResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_portfolio_3243d94d74065ced, []int{11}
}
func (m *GetCVResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetCVResponse.Unmarshal(m, b)
}
func (m *GetCVResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetCVResponse.Marshal(b, m, deterministic)
}
func (dst *GetCVResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetCVResponse.Merge(dst, src)
}
func (m *GetCVResponse) XXX_Size() int {
	return xxx_messageInfo_GetCVResponse.Size(m)
}
func (m *GetCVResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetCVResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetCVResponse proto.InternalMessageInfo

func (m *GetCVResponse) GetSkills() *Skills {
	if m != nil {
		return m.Skills
	}
	return nil
}

func (m *GetCVResponse) GetJobs() *Experience {
	if m != nil {
		return m.Jobs
	}
	return nil
}

func (m *GetCVResponse) GetCourses() *Education {
	if m != nil {
		return m.Courses
	}
	return nil
}

type GetCVRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetCVRequest) Reset()         { *m = GetCVRequest{} }
func (m *GetCVRequest) String() string { return proto.CompactTextString(m) }
func (*GetCVRequest) ProtoMessage()    {}
func (*GetCVRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_portfolio_3243d94d74065ced, []int{12}
}
func (m *GetCVRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetCVRequest.Unmarshal(m, b)
}
func (m *GetCVRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetCVRequest.Marshal(b, m, deterministic)
}
func (dst *GetCVRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetCVRequest.Merge(dst, src)
}
func (m *GetCVRequest) XXX_Size() int {
	return xxx_messageInfo_GetCVRequest.Size(m)
}
func (m *GetCVRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetCVRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetCVRequest proto.InternalMessageInfo

type ListProjectsResponse struct {
	Projects             *Projects `protobuf:"bytes,1,opt,name=projects,proto3" json:"projects,omitempty"`
	XXX_NoUnkeyedLiteral struct{}  `json:"-"`
	XXX_unrecognized     []byte    `json:"-"`
	XXX_sizecache        int32     `json:"-"`
}

func (m *ListProjectsResponse) Reset()         { *m = ListProjectsResponse{} }
func (m *ListProjectsResponse) String() string { return proto.CompactTextString(m) }
func (*ListProjectsResponse) ProtoMessage()    {}
func (*ListProjectsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_portfolio_3243d94d74065ced, []int{13}
}
func (m *ListProjectsResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListProjectsResponse.Unmarshal(m, b)
}
func (m *ListProjectsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListProjectsResponse.Marshal(b, m, deterministic)
}
func (dst *ListProjectsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListProjectsResponse.Merge(dst, src)
}
func (m *ListProjectsResponse) XXX_Size() int {
	return xxx_messageInfo_ListProjectsResponse.Size(m)
}
func (m *ListProjectsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ListProjectsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ListProjectsResponse proto.InternalMessageInfo

func (m *ListProjectsResponse) GetProjects() *Projects {
	if m != nil {
		return m.Projects
	}
	return nil
}

type ListProjectsRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListProjectsRequest) Reset()         { *m = ListProjectsRequest{} }
func (m *ListProjectsRequest) String() string { return proto.CompactTextString(m) }
func (*ListProjectsRequest) ProtoMessage()    {}
func (*ListProjectsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_portfolio_3243d94d74065ced, []int{14}
}
func (m *ListProjectsRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListProjectsRequest.Unmarshal(m, b)
}
func (m *ListProjectsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListProjectsRequest.Marshal(b, m, deterministic)
}
func (dst *ListProjectsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListProjectsRequest.Merge(dst, src)
}
func (m *ListProjectsRequest) XXX_Size() int {
	return xxx_messageInfo_ListProjectsRequest.Size(m)
}
func (m *ListProjectsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ListProjectsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ListProjectsRequest proto.InternalMessageInfo

func init() {
	proto.RegisterType((*Bio)(nil), "portfolio.Bio")
	proto.RegisterType((*Course)(nil), "portfolio.Course")
	proto.RegisterType((*Education)(nil), "portfolio.Education")
	proto.RegisterType((*Skill)(nil), "portfolio.Skill")
	proto.RegisterType((*Skills)(nil), "portfolio.Skills")
	proto.RegisterType((*Project)(nil), "portfolio.Project")
	proto.RegisterType((*Projects)(nil), "portfolio.Projects")
	proto.RegisterType((*Job)(nil), "portfolio.Job")
	proto.RegisterType((*Experience)(nil), "portfolio.Experience")
	proto.RegisterType((*GetBioResponse)(nil), "portfolio.GetBioResponse")
	proto.RegisterType((*GetBioRequest)(nil), "portfolio.GetBioRequest")
	proto.RegisterType((*GetCVResponse)(nil), "portfolio.GetCVResponse")
	proto.RegisterType((*GetCVRequest)(nil), "portfolio.GetCVRequest")
	proto.RegisterType((*ListProjectsResponse)(nil), "portfolio.ListProjectsResponse")
	proto.RegisterType((*ListProjectsRequest)(nil), "portfolio.ListProjectsRequest")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// PortfolioServiceClient is the client API for PortfolioService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type PortfolioServiceClient interface {
	GetBio(ctx context.Context, in *GetBioRequest, opts ...grpc.CallOption) (PortfolioService_GetBioClient, error)
	GetCV(ctx context.Context, in *GetCVRequest, opts ...grpc.CallOption) (PortfolioService_GetCVClient, error)
	ListProjects(ctx context.Context, in *ListProjectsRequest, opts ...grpc.CallOption) (PortfolioService_ListProjectsClient, error)
}

type portfolioServiceClient struct {
	cc *grpc.ClientConn
}

func NewPortfolioServiceClient(cc *grpc.ClientConn) PortfolioServiceClient {
	return &portfolioServiceClient{cc}
}

func (c *portfolioServiceClient) GetBio(ctx context.Context, in *GetBioRequest, opts ...grpc.CallOption) (PortfolioService_GetBioClient, error) {
	stream, err := c.cc.NewStream(ctx, &_PortfolioService_serviceDesc.Streams[0], "/portfolio.PortfolioService/GetBio", opts...)
	if err != nil {
		return nil, err
	}
	x := &portfolioServiceGetBioClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type PortfolioService_GetBioClient interface {
	Recv() (*GetBioResponse, error)
	grpc.ClientStream
}

type portfolioServiceGetBioClient struct {
	grpc.ClientStream
}

func (x *portfolioServiceGetBioClient) Recv() (*GetBioResponse, error) {
	m := new(GetBioResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *portfolioServiceClient) GetCV(ctx context.Context, in *GetCVRequest, opts ...grpc.CallOption) (PortfolioService_GetCVClient, error) {
	stream, err := c.cc.NewStream(ctx, &_PortfolioService_serviceDesc.Streams[1], "/portfolio.PortfolioService/GetCV", opts...)
	if err != nil {
		return nil, err
	}
	x := &portfolioServiceGetCVClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type PortfolioService_GetCVClient interface {
	Recv() (*GetCVResponse, error)
	grpc.ClientStream
}

type portfolioServiceGetCVClient struct {
	grpc.ClientStream
}

func (x *portfolioServiceGetCVClient) Recv() (*GetCVResponse, error) {
	m := new(GetCVResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *portfolioServiceClient) ListProjects(ctx context.Context, in *ListProjectsRequest, opts ...grpc.CallOption) (PortfolioService_ListProjectsClient, error) {
	stream, err := c.cc.NewStream(ctx, &_PortfolioService_serviceDesc.Streams[2], "/portfolio.PortfolioService/ListProjects", opts...)
	if err != nil {
		return nil, err
	}
	x := &portfolioServiceListProjectsClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type PortfolioService_ListProjectsClient interface {
	Recv() (*ListProjectsResponse, error)
	grpc.ClientStream
}

type portfolioServiceListProjectsClient struct {
	grpc.ClientStream
}

func (x *portfolioServiceListProjectsClient) Recv() (*ListProjectsResponse, error) {
	m := new(ListProjectsResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// PortfolioServiceServer is the server API for PortfolioService service.
type PortfolioServiceServer interface {
	GetBio(*GetBioRequest, PortfolioService_GetBioServer) error
	GetCV(*GetCVRequest, PortfolioService_GetCVServer) error
	ListProjects(*ListProjectsRequest, PortfolioService_ListProjectsServer) error
}

func RegisterPortfolioServiceServer(s *grpc.Server, srv PortfolioServiceServer) {
	s.RegisterService(&_PortfolioService_serviceDesc, srv)
}

func _PortfolioService_GetBio_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(GetBioRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(PortfolioServiceServer).GetBio(m, &portfolioServiceGetBioServer{stream})
}

type PortfolioService_GetBioServer interface {
	Send(*GetBioResponse) error
	grpc.ServerStream
}

type portfolioServiceGetBioServer struct {
	grpc.ServerStream
}

func (x *portfolioServiceGetBioServer) Send(m *GetBioResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _PortfolioService_GetCV_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(GetCVRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(PortfolioServiceServer).GetCV(m, &portfolioServiceGetCVServer{stream})
}

type PortfolioService_GetCVServer interface {
	Send(*GetCVResponse) error
	grpc.ServerStream
}

type portfolioServiceGetCVServer struct {
	grpc.ServerStream
}

func (x *portfolioServiceGetCVServer) Send(m *GetCVResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _PortfolioService_ListProjects_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(ListProjectsRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(PortfolioServiceServer).ListProjects(m, &portfolioServiceListProjectsServer{stream})
}

type PortfolioService_ListProjectsServer interface {
	Send(*ListProjectsResponse) error
	grpc.ServerStream
}

type portfolioServiceListProjectsServer struct {
	grpc.ServerStream
}

func (x *portfolioServiceListProjectsServer) Send(m *ListProjectsResponse) error {
	return x.ServerStream.SendMsg(m)
}

var _PortfolioService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "portfolio.PortfolioService",
	HandlerType: (*PortfolioServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetBio",
			Handler:       _PortfolioService_GetBio_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "GetCV",
			Handler:       _PortfolioService_GetCV_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "ListProjects",
			Handler:       _PortfolioService_ListProjects_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "proto/portfolio.proto",
}

func init() { proto.RegisterFile("proto/portfolio.proto", fileDescriptor_portfolio_3243d94d74065ced) }

var fileDescriptor_portfolio_3243d94d74065ced = []byte{
	// 582 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x94, 0xd1, 0x6e, 0xd3, 0x30,
	0x14, 0x86, 0x95, 0x26, 0xcd, 0xda, 0xb3, 0x51, 0x86, 0xd7, 0x8a, 0xac, 0x48, 0x50, 0xf9, 0xaa,
	0x13, 0x52, 0x37, 0x95, 0x1b, 0x84, 0x40, 0x48, 0x9b, 0xa6, 0x49, 0x13, 0x17, 0x23, 0x03, 0x24,
	0xae, 0xa6, 0x24, 0x35, 0x93, 0x4b, 0x1a, 0x87, 0xd8, 0x9d, 0xd8, 0x83, 0xf0, 0x14, 0xbc, 0x16,
	0x0f, 0x82, 0x72, 0xec, 0x24, 0x6e, 0x33, 0xc4, 0x9d, 0x8f, 0xcf, 0xef, 0x3f, 0xdf, 0xb1, 0xff,
	0x16, 0x46, 0x79, 0x21, 0x94, 0x38, 0xce, 0x45, 0xa1, 0xbe, 0x89, 0x94, 0x8b, 0x19, 0xd6, 0xa4,
	0x5f, 0x6f, 0xd0, 0x77, 0xe0, 0x9e, 0x72, 0x41, 0x86, 0xd0, 0x55, 0x5c, 0xa5, 0x2c, 0x70, 0x26,
	0xce, 0xb4, 0x1f, 0xea, 0x82, 0x4c, 0x60, 0x77, 0xc1, 0x64, 0x52, 0xf0, 0x5c, 0x71, 0x91, 0x05,
	0x1d, 0xec, 0xd9, 0x5b, 0xf4, 0x0e, 0xfc, 0x33, 0xb1, 0x2e, 0x24, 0x6a, 0x79, 0x26, 0x15, 0x57,
	0x6b, 0xd4, 0x6a, 0x1f, 0x7b, 0xeb, 0xff, 0x6e, 0x25, 0xc5, 0x22, 0x52, 0x4c, 0x06, 0xae, 0xa6,
	0xc0, 0x82, 0x10, 0xf0, 0xb2, 0x68, 0xc5, 0x02, 0x0f, 0x37, 0x71, 0x4d, 0x5f, 0x43, 0xff, 0x7c,
	0xb1, 0x4e, 0x22, 0x3c, 0xf6, 0x12, 0x76, 0x12, 0x84, 0x90, 0x81, 0x33, 0x71, 0xa7, 0xbb, 0xf3,
	0x27, 0xb3, 0x66, 0x62, 0x8d, 0x17, 0x56, 0x0a, 0xfa, 0x15, 0xba, 0xd7, 0xdf, 0x79, 0x9a, 0x92,
	0x31, 0xf4, 0x92, 0x48, 0xb1, 0x5b, 0x51, 0xdc, 0x1b, 0xda, 0xba, 0x2e, 0x3f, 0xa9, 0xee, 0x73,
	0x66, 0x18, 0x71, 0xbd, 0x8d, 0xef, 0xb6, 0x2f, 0x63, 0x0e, 0x3e, 0x5a, 0x4b, 0x32, 0x05, 0x5f,
	0xe2, 0xca, 0x00, 0xed, 0x5b, 0x40, 0x28, 0x09, 0x4d, 0x9f, 0x32, 0xd8, 0xb9, 0x2a, 0xc4, 0x92,
	0x25, 0x8a, 0x0c, 0xa0, 0xc3, 0x17, 0x88, 0xd2, 0x0d, 0x3b, 0x7c, 0xd1, 0xbc, 0x49, 0xc7, 0x7e,
	0x13, 0x02, 0xde, 0x8a, 0xa9, 0xc8, 0x7c, 0x1f, 0xd7, 0xdb, 0x68, 0x5e, 0x1b, 0xed, 0x0d, 0xf4,
	0xcc, 0x67, 0x24, 0x99, 0x41, 0x2f, 0x37, 0x6b, 0x83, 0x47, 0x2c, 0x3c, 0x23, 0x0b, 0x6b, 0x0d,
	0xfd, 0xed, 0x80, 0x7b, 0x29, 0x62, 0x12, 0x94, 0xd7, 0xbc, 0xca, 0xa3, 0xac, 0xba, 0xaf, 0xaa,
	0x24, 0xcf, 0xa0, 0xbf, 0x14, 0xf1, 0x8d, 0x4d, 0xdb, 0x5b, 0x8a, 0xf8, 0x13, 0x02, 0x8f, 0xa1,
	0x97, 0x0a, 0xfd, 0x52, 0x06, 0xba, 0xae, 0x9b, 0x07, 0xf7, 0xec, 0x07, 0xdf, 0x1a, 0xa7, 0xdb,
	0x0e, 0xca, 0x61, 0xe9, 0x79, 0x2b, 0x6e, 0xd6, 0x45, 0x1a, 0xf8, 0x9a, 0xa5, 0xac, 0x3f, 0x17,
	0x29, 0x3d, 0x01, 0x38, 0xff, 0x99, 0xb3, 0x82, 0xb3, 0x2c, 0x61, 0x84, 0x82, 0xb7, 0x14, 0x71,
	0x35, 0xe7, 0xc0, 0x9a, 0xf3, 0x52, 0xc4, 0x21, 0xf6, 0xe8, 0x1c, 0x06, 0x17, 0x4c, 0x9d, 0x72,
	0x11, 0x32, 0x99, 0x8b, 0x0c, 0xb3, 0xec, 0xc6, 0x5c, 0xe0, 0x94, 0x9b, 0x87, 0x4a, 0x51, 0xd9,
	0xa2, 0x8f, 0xe1, 0x51, 0x75, 0xe6, 0xc7, 0x9a, 0x49, 0x45, 0x7f, 0x39, 0xb8, 0x73, 0xf6, 0xa5,
	0x36, 0x39, 0xb2, 0x32, 0xe0, 0x6c, 0x85, 0x52, 0xc7, 0xa4, 0x0a, 0x01, 0x39, 0x32, 0x94, 0x1d,
	0x14, 0x8e, 0x2c, 0x61, 0x33, 0x8a, 0x86, 0x25, 0xb3, 0x26, 0xeb, 0x2e, 0xaa, 0x87, 0xb6, 0xba,
	0xfa, 0x49, 0x34, 0x71, 0x1f, 0xc0, 0x9e, 0xc1, 0xd2, 0x9c, 0x17, 0x30, 0xfc, 0xc0, 0xa5, 0xaa,
	0xc2, 0x50, 0xd3, 0x1e, 0x6f, 0x84, 0xa2, 0x34, 0x3e, 0x68, 0x87, 0x42, 0x5a, 0xa9, 0x18, 0xc1,
	0xc1, 0xa6, 0x11, 0xfa, 0xcf, 0xff, 0x38, 0xb0, 0x7f, 0x55, 0x9d, 0xbb, 0x66, 0xc5, 0x1d, 0x4f,
	0x18, 0x79, 0x0f, 0xbe, 0xbe, 0x2d, 0x12, 0x58, 0xa6, 0x1b, 0x17, 0x38, 0x3e, 0x7c, 0xa0, 0xa3,
	0xd9, 0x4e, 0x1c, 0xf2, 0x16, 0xba, 0x38, 0x05, 0x79, 0xba, 0xa9, 0xaa, 0xe7, 0x1a, 0x07, 0xed,
	0x46, 0x7d, 0xfa, 0x23, 0xec, 0xd9, 0xa8, 0xe4, 0xb9, 0xa5, 0x7d, 0x60, 0x86, 0xf1, 0x8b, 0x7f,
	0xf6, 0x2b, 0xcb, 0xd8, 0xc7, 0x3f, 0xd2, 0x57, 0x7f, 0x03, 0x00, 0x00, 0xff, 0xff, 0x11, 0xf9,
	0x23, 0xe4, 0x61, 0x05, 0x00, 0x00,
}
